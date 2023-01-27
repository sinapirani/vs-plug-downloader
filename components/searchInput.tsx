import {useDispatch, useSelector} from "react-redux"
import { changeSearch } from "../store/searchSlice";
import {useEffect, useState} from 'react'
import useSWR from 'swr'
import axios from "axios";


export const SearchInput = () => {

  const dis = useDispatch() 

  return (
    <>
      <div className="relative mt-24">
        <div className=" absolute w-[400px] h-[400px] rounded-full bg-blue-900/30 blur-[100px] left-0 right-0 -z-10"></div>
        <h1 className="lg:text-5xl font-black text-center">
          A Tool <br /> For download <br /> VScode extentions
        </h1>
      </div>
      <div className="w-2/4 flex justify-center items-center">
        <input
          className="px-4 text-black w-[50%] h-11 rounded-md outline-none "
          type="text"
          onChange={(e) => dis(changeSearch(e.currentTarget.value))}
        />
      </div>
    </>
  );
};
