
export interface Pokemon {
  data: any;
  id: number;
  name: string;
  sprites: PokemonSprites;
  weight: number;
  height: number;
  types:  PokemonTypeDetail[];
  species: PokemonSpecies;
  abilities: PokemonAbility[];
  evolution_chain: EvolutionDetail[];
}

export interface PokemonSprites {
  front_default: string;
  back_default: string;
  other: {
    dream_world: {
      front_default: string;
    }
  };
}

export interface PokemonTypeDetail {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface Ability {
  name: string;
  url: string;
}

export interface PokemonAbility {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

export interface EvolutionDetail {
  name: string;
  id: number;
  sprite: string;
  min_level?: number;
}

export interface PokemonSpecies {
  evolution_chain: {
    url: string;
  }
}
