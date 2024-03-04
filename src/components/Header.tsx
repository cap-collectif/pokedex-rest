import Link from 'next/link'
import { HomeIcon } from '@heroicons/react/20/solid'

const Header = () => {
  return (
    <header className="bg-red-700 text-white p-4 flex justify-between items-center">
      <Link href={'/'} className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4">
        <HomeIcon className="h-6 w-6" />
      </Link>
      <h1 className="text-xl md:text-3xl font-bold">
        MY POKEDEX
      </h1>
      <div></div>
    </header>
  )
}

export default Header