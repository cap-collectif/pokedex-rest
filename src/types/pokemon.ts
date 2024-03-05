export type Pokemon = {
  data: any
  id: number
  name: string
  sprites: {
    front_default: string
    back_default: string
    front_shiny: string
    back_shiny: string
  }
  weight: number
  height: number
  types: {
    slot: number
    type: {
      name: string
      url: string
    }
  }
  stats: PokemonStats[]
}

// Stats
export type PokemonStats = {
  base_stat: number
  effort: number
  stat: { name: string; url: string }
}

// Evolution types
export type EvolutionChain = {
  id: number
  baby_trigger_item: any
  chain: ChainLink
}
export type ChainLink = {
  is_baby: boolean
  species: {
    name: string
    url: string
  }
  evolution_details: any
  evolves_to: ChainLink[]
}
export type Evolution = {
  name: string
  img: string
}
