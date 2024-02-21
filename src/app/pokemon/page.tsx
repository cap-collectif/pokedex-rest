'use client'

import Pokemon from '@/components/Pokemon'
import { useSearchParams } from 'next/navigation'

export default function PokemonView() {
  const searchParams = useSearchParams()

  const pokemonName = String(searchParams.get('name'))
  return <Pokemon pokemonName={pokemonName} />
}
