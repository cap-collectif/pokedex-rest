import { useQuery, UseQueryResult } from '@tanstack/react-query'
import axios from 'axios'
import { Pokemon, EvolutionDetail, PokemonSpecies } from '@/types/Pokemon'

export const getPokemonByName = async (name: string): Promise<Pokemon> => {
  const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return data
}

export const getPokemonSpecies = async (name: string): Promise<PokemonSpecies> => {
  const { data } = await axios(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
  return data;
}

export const getEvolutionChains = async (url: string): Promise<EvolutionDetail[]> => {
  const getSpeciesData = async (speciesUrl: string, evolutionDetails: { min_level?: number }): Promise<EvolutionDetail> => {
    const speciesResponse = await axios.get(speciesUrl);
    const speciesData = speciesResponse.data;

    const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${speciesData.name}`);
    const pokemonData = pokemonResponse.data;

    return {
      name: speciesData.name,
      id: pokemonData.id,
      sprite: pokemonData.sprites.front_default,
      min_level: evolutionDetails?.min_level,
    };
  };

  const { data: evolutionData } = await axios.get(url);
  let chain = evolutionData.chain;
  const evolutionChainDetails: EvolutionDetail[] = [];

  const navigateEvolutionChain = async (currentChain: any): Promise<void> => {
    if (currentChain.species) {
      evolutionChainDetails.push(await getSpeciesData(currentChain.species.url, currentChain.evolution_details[0]));
    }

    for (let evolvesTo of currentChain.evolves_to) {
      await navigateEvolutionChain(evolvesTo);
    }
  };
  await navigateEvolutionChain(chain);

  return evolutionChainDetails;
};

export const usePokemonDetails = (pokemonName: string): UseQueryResult<Pokemon> => {
  return useQuery<Pokemon>({
    queryKey: ['pokemonDetails', pokemonName],
    queryFn: async () => {
      const pokemonData = await getPokemonByName(pokemonName);
      const speciesData = await getPokemonSpecies(pokemonName);
      const evolutionChainData = await getEvolutionChains(speciesData.evolution_chain.url)
      return { ...pokemonData,  evolution_chain:  evolutionChainData  };
    }
  });
};