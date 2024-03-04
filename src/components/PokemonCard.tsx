import Image from 'next/image'
import Link from 'next/link'
import {PokemonType } from '@/types/Pokemon'

interface PokemonCardProps {
  pokemon: PokemonType;
  sprite: string;
}
const PokemonCard = ({ pokemon, sprite }: PokemonCardProps) => {


  return (
    <Link href={`/pokemon?name=${pokemon.name}`} className="max-w-64">
      <div
        className="relative mx-auto rounded-lg bg-black overflow-hidden w-64 h-72 border-4 border-yellow-400 px-4"
      >

        <div className="relative mx-auto flex flex-col items-center">
          <div className="relative w-full h-40 flex justify-center items-center bg-white mt-4">
            <Image src={sprite} alt={pokemon.name} layout="fill" objectFit="contain" />
          </div>
        </div>
        <div>
          <h2 className="text-center text-xl font-bold  ml-4 mt-4">{pokemon.name.toUpperCase()}</h2>
          <div className="absolute right-0 bottom-0 bg-red-700 text-white py-1 px-3 rounded-tl-lg">
            # {pokemon.id.toString().padStart(3, '000')}
          </div>
        </div>
      </div>

    </Link>
  )
}

export default PokemonCard