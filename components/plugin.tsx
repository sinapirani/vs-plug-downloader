import axios, { AxiosRequestConfig } from "axios";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Rating } from "react-simple-star-rating";
export const PluginElement = ({ extention }: any) => {
  const pluginRef = useRef<HTMLDivElement>(null);
  const [installs, setInstalls] = useState(0);
    const router = useRouter()
    const Download = async() => {
        const axiosConfig:AxiosRequestConfig = {
            url: "/api/download",
            method: "POST",
            data:{
                extention
            }
        }
        let response = await axios(axiosConfig)
        response = response.data
        window.open(response.data)
    }

  useEffect(() => {
    console.log("EXX", extention);
    if (extention.statistics) {
      const installsCount = extention.statistics.find(
        (el: any) => (el.name = "install")
      );
      setInstalls(installsCount.value);
    }
  }, [extention]);

  // useEffect(() => {
  //     if(pluginRef.current && extention){
  //         pluginRef.current.setAttribute("style", `background-image: url(${extention.versions[0]?.files[0]?.source})`)
  //     }
  // }, [pluginRef])

  if (!extention) {
    return;
  }

  return (
    <div
      ref={pluginRef}
      className={`w-2/6 h-[300px]  rounded-xl flex-shrink-0 flex flex-col justify-center items-center gap-x-4 border-solid border-black/40 border-2 bg-black/10 `}
    >
      <div className="flex justify-center items-center gap-x-4">
        <img
          width={80}
          height={80}
          src={
            extention.versions[0]?.files[0]?.source
              ? `${extention.versions[0]?.files[0]?.source}`
              : "/noimage.png"
          }
          alt=""
        />
        <div>
          <h4 className=" text-lg font-bold w-[15ch] truncate ">
            {extention.displayName}
          </h4>
          <p className="text-zinc-300 w-[15ch] truncate ">
            {extention.shortDescription}
          </p>
          <p className=" text-zinc-300 ">
            version: {extention.versions[0].version}
          </p>
          <p className=" text-zinc-300 ">
            installs: {installs.toLocaleString()}
          </p>
        </div>
      </div>
      <button onClick={Download} className=" hover:bg-white/20 duration-500 border-solid border-2 border-white/20 px-8 py-3 mt-9 rounded-lg">
        Download
      </button>
    </div>
  );
};
