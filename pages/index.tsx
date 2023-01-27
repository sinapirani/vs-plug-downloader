import Head from 'next/head'
import Image from 'next/image'
import { SearchInput } from '../components/searchInput'
import { Results } from '../components/results'


export default function Home() {
  return (
    <div className=" text-white min-h-[100vh] w-full flex flex-col justify-center items-center gap-y-8">
      <SearchInput/>
      <Results/>
      <div className='mb-4'>
        <p className=' font-sans'>#MahsaAmini</p>
      </div>
    </div>
  )
}
