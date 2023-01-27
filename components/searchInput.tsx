import {useDispatch, useSelector} from "react-redux"
import { changeSearch } from "../store/searchSlice";
import {useEffect, useState} from 'react'
import useSWR from 'swr'
import axios from "axios";


export const SearchInput = () => {

  const dis = useDispatch() 
  const [query, setQuery] = useState()

  useEffect(() => {
    const updateRedux = setTimeout(() => {
      dis(changeSearch(query!))
    }, 1500);
    return () => clearTimeout(updateRedux)
  },[query])

  return (
    <>
      <div className="relative mt-24">
        <div className=" absolute w-[400px] h-[400px] rounded-full bg-blue-900/30 blur-[100px] left-0 right-0 -z-10"></div>
        <h1 className=" font-[Oswald] text-3xl lg:text-5xl font-black text-center">
          A Tool <br /> For download <br /> VScode extentions
        </h1>
      </div>
      <div className="lg:w-2/4 w-3/4 flex justify-center items-center">
        <input
          className="px-4 font-[Oswald] border-solid border-black/40 border-2 bg-black/10 text-white lg:w-[50%] w-full h-11 rounded-md outline-none "
          type="text"
          placeholder="search somthing"
          onChange={(e:any) => setQuery(e.currentTarget.value)}
        />
      </div>
    </>
  );
};
