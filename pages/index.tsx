import Head from 'next/head'
import Image from 'next/image'
import { SearchInput } from '../components/searchInput'
import { Results } from '../components/results'
import { MahsaAmini } from '../components/mahsaamini'



export default function Home() {
  return (
    <div className=" text-white min-h-[100vh] w-full flex flex-col justify-center items-center gap-y-8">
  
      <SearchInput/>
      <Results/>
      <MahsaAmini/>
    </div>
  )
}
