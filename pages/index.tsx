import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Head>
        <title>Medium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className='flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0'>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif'>
            <span className='underline decoration-black decoration-4'>
              Medium
            </span>{" "}
            is a place to write, read and connect
          </h1>
          <h2>
            It's easy and free to post your thinking on any topic and connect with millions of readers.
          </h2>
          <div>
            <h3 className="text-black bg-white px-4 py-1 border-2 border-slate-600  rounded-full w-fit cursor-pointer">
              Start Writing
            </h3>
          </div>
        </div>

        <div>
          <img 
            className='hidden md:inline-flex lg:h-full px-10'
            src="/img/medium-logo-trademark.png" 
            alt="medium-logo-trademark"
            width={500}
            height={500}
          />
        </div>

      </div>

      
    </div>
  )
}
