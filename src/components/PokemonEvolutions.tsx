import { Evolution } from '@/types/pokemon'

type PokemonEvolutionsProps = {
  name: string
  chain: Evolution[]
}

export const PokemonEvolutions = ({ name, chain }: PokemonEvolutionsProps) => {
  if (!chain.length) return <h2>{name} has no evolutions</h2>

  return (
    <div className="flex flex-col items-center w-fit py-2 px-10 mt-10">
      <h2>{name}'s evolution chain</h2>
      <div className="flex gap-x-4">
        {chain.map((evol: Evolution, i) => (
          <div key={i} className="flex flex-col justify-between items-center">
            <img src={evol.img} alt={evol.name} />
            <span className="text-sm">{evol.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
