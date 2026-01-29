import heroImage from '../assets/hero.png'

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat text-white"
     style={{backgroundImage: `url(${heroImage})`}}
    >
      {/* overlay */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(8,0,58,0.7),rgba(8,0,58,0.7))]'></div>

    </div>
  )
}

export default Hero