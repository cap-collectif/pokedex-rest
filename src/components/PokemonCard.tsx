import Link from 'next/link'
import Pokemon from './Pokemon'

export const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  const sprite = pokemon?.sprites?.front_default

  return (
    <div className="rounded-lg p-4 hover:cursor-pointer bg-slate-900 hover:bg-slate-800">
      <Link href={`/pokemon?name=${pokemon.name}`}>
        <div className="flex flex-col items-center">
          <div className="first-letter:capitalize font-semibold">{pokemon.name}</div>
          <img src={sprite} alt={pokemon.name} />
        </div>
      </Link>
    </div>
  )
}
