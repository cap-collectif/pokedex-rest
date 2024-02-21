/* eslint-disable @next/next/no-img-element */
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

// TODO Complete this if needed
export type Pokemon = {
  data: any
  id: number
  name: string
  sprites: { front_default: string }
  weight: number
}

export const getPokemonByName = async (name: string) => {
  const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return data
}

// TODO : Display the informations you want about the Pokemon, add a bit of styling
export const Pokemon = ({ pokemonName }: { pokemonName: string }) => {
  const { data: pokemon, isPending } = useQuery({
    queryKey: ['pokemon'],
    queryFn: () => getPokemonByName(pokemonName),
  })

  if (isPending) return 'Loading'

  // To help
  console.log(pokemon)

  return (
    <div>
      Weight : {pokemon?.weight}
      <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
    </div>
  )
}

export default Pokemon
