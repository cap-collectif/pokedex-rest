import Link from 'next/link'
import Image from 'next/image'
import { PokemonType } from '@/types/Pokemon'

interface SearchBarProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filteredPokemons: PokemonType[];
  searchInput: string;
}

export const SearchBar = ({handleChange, filteredPokemons, searchInput}: SearchBarProps) => {

  return (
    <div className="relative max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
        className="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-t-lg text-sm focus:outline-none" />
      {filteredPokemons.length !== 0 && (
        <ul
          className="absolute w-full border-2 border-t-0 border-gray-300 rounded-b-lg bg-white max-h-60 overflow-y-auto z-50 ">
          {filteredPokemons.map((pokemon: PokemonType) => (
            <li key={pokemon?.id} className="px-10 py-2 border-b-2 hover:bg-gray-100">
              <Link href={`/pokemon?name=${pokemon?.name}`} className="flex flex-row items-center justify-between gap-6">
              <span>{pokemon.name.toUpperCase()}</span>
                <Image width={90} height={50} src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
              </Link>
            </li>

          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBar