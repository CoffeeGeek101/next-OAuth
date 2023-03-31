import './global.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='text-red-500 w-96 m-auto  text-center'>
      Auth component
    </div>
  )
}
