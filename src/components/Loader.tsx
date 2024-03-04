import Image from 'next/image'

export const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <Image height={400} width={400} src={'/pikachu-running.gif'} alt="Loading..." />
    </div>
  )
}

export default Loader