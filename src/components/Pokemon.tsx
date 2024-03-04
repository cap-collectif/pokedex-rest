import Image from 'next/image'
import Link from 'next/link'
import { PokemonAbility, PokemonTypeDetail } from '@/types/Pokemon'
import { usePokemonDetails } from '@/hooks/usePokemonDetails'
import Loader from '@/components/Loader'

export const Pokemon = ({ pokemonName }: { pokemonName: string }) => {
  const { data: pokemon, isLoading } = usePokemonDetails(pokemonName)
  const formattedPokemonName = pokemon?.name ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) : ''
  const formattedPokemonHeight = pokemon?.height ? (pokemon?.height / 10).toFixed(2) : ''
  const formattedPokemonWeight = pokemon?.weight ? (pokemon?.weight / 10).toFixed(2) : ''

  if (isLoading) return <Loader />
// TODO: implement responsive design enhancements and UI animations for improved user experience
// TODO: develop an expanded Pokémon detail view featuring combat stats, generation information, and more
// TODO: extract components
// TODO: complete the evolution chain

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mt-10 mb-20">
        <h1
          className="font-extrabold text-2xl">#{pokemon?.id} - {formattedPokemonName}</h1>
      </div>
      <div className="flex flex-row justify-between gap-8">
        <div className="flex flex-row p-4 gap-4">
          <Image width={200} height={200} src={pokemon!!.sprites.front_default} alt={formattedPokemonName}
                 className="mx-auto " />
          <Image width={200} height={200} src={pokemon!!.sprites.back_default} alt={formattedPokemonName}
                 className="mx-auto " />
        </div>
        <div className="my-auto">
          <h2 className="font-bold text-center">Details</h2>
          <div className="flex flex-row gap-8 mt-10">
            <div className="flex flex-col text-center">
              <h3 className="font-semibold mb-6">Types</h3>
              <div className="flex flex-col">
                {pokemon?.types.map((type: PokemonTypeDetail, index: number) => (
                  <span key={index}
                        className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{type.type.name}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col text-center">
              <h3 className="font-semibold mb-6">Measurements</h3>
              <span>{formattedPokemonHeight} m</span>
              <span>{formattedPokemonWeight} kg</span>
            </div>
            <div className="flex flex-col text-center">
              <h3 className="font-semibold mb-6">Abilities</h3>
              {pokemon?.abilities.map((ability: PokemonAbility, index: number) => (
                <span key={index}
                      className="text-sm">{ability.ability.name}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="gap-4 my-auto">
          <h2 className="font-bold text-center">Evolution chain</h2>
          <div className="flex">
            {pokemon?.evolution_chain.map((evolution, index: number) => (
              <Link href={`/pokemon?name=${evolution?.name}`} key={index} className="p-4 text-center">
                <Image width={100} height={100} src={evolution.sprite} alt={evolution.name} className="mx-auto" />
                <p className="mt-2 font-bold">{evolution.name.charAt(0).toUpperCase() + evolution.name.slice(1)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pokemon
