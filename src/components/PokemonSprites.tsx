import { Pokemon } from '@/types/pokemon'
import { capitalizeFirstLetter } from '@/utils/stringFormat'

type SpriteComponent = {
  spriteName: string
  spriteSource: string
}

export const PokemonSprites = ({ pokemon }: { pokemon: Pokemon }) => {
  const frontSprite = pokemon.sprites.front_default
  const backSprite = pokemon.sprites.back_default
  const shinySprite = pokemon.sprites.front_shiny
  const shinyBackSprite = pokemon.sprites.back_shiny
  const name = capitalizeFirstLetter(pokemon.name)

  const Sprite = ({ spriteName, spriteSource }: SpriteComponent) => {
    return (
      <div className="flex flex-col items-center">
        <img src={spriteSource} alt={`${name}'s ${spriteName}`} />
        <span className="text-xs">{capitalizeFirstLetter(spriteName)}</span>
      </div>
    )
  }

  return (
    <div id="pokemonSprites" className="flex w-fit p-4 items-center">
      <Sprite spriteName="front" spriteSource={frontSprite} />
      {backSprite && <Sprite spriteName="back" spriteSource={backSprite} />}
      {shinySprite && <Sprite spriteName="shiny" spriteSource={shinySprite} />}
      {shinySprite && shinyBackSprite && <Sprite spriteName="shiny back" spriteSource={shinyBackSprite} />}
    </div>
  )
}
