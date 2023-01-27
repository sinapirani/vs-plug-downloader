import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useSWR from "swr";
import { PluginElement } from "./plugin";

export const Results = () => {
  const [page, setPage] = useState();
  const searchQuery = useSelector((state: any) => state.searchSlice.search);
  const fetcher = ([url, query]: any) =>
    axios
      .get(url, { params: query })
      .then((res) => res.data)
      .catch((e) => e);
  const { data, error } = useSWR(
    searchQuery ? ["/api/search", { search: searchQuery, page: page }] : null,
    fetcher
  );
  
  useEffect(() => {
    console.log(data);
  }, [data])

  if(error){
    return(
        <p>Internal Error</p>
    )
  }
  
  if(!searchQuery){
    return ;
  }
  
  if(data?.success != true  && !error){
    return (
        <p>loading</p>
    )
  }


  return (
    <div className="w-11/12 flex justify-center items-center flex-shrink-0 flex-wrap gap-y-4  gap-x-4 ">
      {
        data.data.map((extention:any, index:any) => {
            return <PluginElement extention={extention} key={index}/>
        })
      }
    </div>
  );
};
