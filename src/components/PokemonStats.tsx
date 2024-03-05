import { Pokemon } from '@/types/pokemon'
import { capitalizeFirstLetter } from '@/utils/stringFormat'

export const PokemonStats = ({ pokemon }: { pokemon: Pokemon }) => {
  if (!pokemon.stats.length) return null

  return (
    <div className="flex flex-col items-center">
      <h2 className="">Stats</h2>
      <ul className="flex flex-wrap items-center gap-x-4">
        {pokemon.stats.map((stat, i) => (
          <li key={i}>
            <span>{capitalizeFirstLetter(stat.stat.name)}: </span>
            <span>{stat.base_stat}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
