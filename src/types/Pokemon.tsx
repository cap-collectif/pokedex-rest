
export interface PokemonType {
  data: any;
  id: number;
  name: string;
  sprites: PokemonSprites;
  weight?: number;
  height?: number;
  types?:  PokemonTypeDetail[];
}

export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
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
