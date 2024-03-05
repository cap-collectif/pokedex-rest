export const PokemonTypes = ({ types }: { types: string[] }) => {
  if (types.length === 1) {
    return (
      <div>
        <span>Type : </span>
        <span>{types[0]}</span>
      </div>
    )
  }

  return (
    <div>
      <span>Types : </span>
      <span>{types.map((type, i) => `${type}${i === types.length - 1 ? '' : ', '}`)}</span>
    </div>
  )
}
