
export interface PokemonType {
  id: number;
  name: string;
  sprites: PokemonSprites;
  weight: number;
  height: number;
  types:  PokemonTypeDetail[];
}

export interface PokemonSprites {
  front_default: string | null;
  front_shiny: string | null;
  other: {
    dream_world: {
      front_default: string | null;
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
