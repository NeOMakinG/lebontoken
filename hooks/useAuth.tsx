import { selectIsConnected, setIsConnected } from "../store/auth";
import { useDispatch, useSelector } from "react-redux";
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { useAccount, useConnect, useEnsName, useBalance } from 'wagmi'
import { useEffect, useMemo } from "react";
import BigNumber from "bignumber.js";

const useAuth = () => {
  const dispatch = useDispatch()
  const isConnected = useSelector(selectIsConnected)
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  })
  const { address, isConnected: isWagmiConnected } = useAccount()
  const { data: ensName } = useEnsName({
    address,
  })
  const { data: balance } = useBalance({
    addressOrName: address,
  })

  const truncatedAddress = useMemo(() => {
    const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;
    const match = address?.match(truncateRegex);
    if (!match) return address;
    return `${match[1]}…${match[2]}`;
  }, [address])

  const truncatedBalance = useMemo(() => {
    if (balance?.formatted) {
      return BigNumber(balance?.formatted).toFormat(4)
    }
  }, [balance?.formatted])


  useEffect(() => {
    dispatch(setIsConnected(isWagmiConnected))
  }, [isWagmiConnected])

  return {
    isConnected,
    connect,
    address,
    ensName,
    truncatedAddress,
    balance,
    truncatedBalance
  }
}

export default useAuth
