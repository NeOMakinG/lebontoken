import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { CONTRACTS_ADDRESSES } from "../constants/contracts";
import contract from "../hardhat/artifacts/contracts/Lebontoken.sol/Lebontoken.json";

const useLebontokenContract = () => {
  const { config } = usePrepareContractWrite({
    addressOrName: CONTRACTS_ADDRESSES.LEBONTOKEN,
    contractInterface: contract.abi,
    functionName: 'mint',
  })
  const { data, isLoading, isSuccess, write: mint } = useContractWrite(config)

  useEffect(() => {
  }, [])

  return {
    mint,
    data,
    isLoading,
    isSuccess
  }
}

export default useLebontokenContract
