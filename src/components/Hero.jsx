import { brevis, bookgif } from "../assets";

const Hero = () => {
	return (
		<header className='w-full flex justify-center items-center flex-col'>
			<nav className='flex justify-between items-center w-full mb-10 pt-3'>
				<img
					src={brevis}
					alt='sumz_logo'
					className='w-28 object-contain'
				/>

				<img
					src={bookgif}
					alt=''
					height={45}
					width={60}
				/>
				<button
					type='button'
					onClick={() => window.open("https://github.com/brndiasdev", "_blank")}
					className='black_btn bg-gradient-to-r from-purple-400 to-purple-600'
				>
					Entrar
				</button>
			</nav>

			<h1 className='head_text'>
				Resuma seus Artigos <br className='max-md:hidden' />
				<span className='purple_gradient'>Brevis GPT-4</span>
			</h1>
			<h2 className='desc'>
				Simplifique sua leitura com o{" "}
				<span className='text-extrabold text-purple-800'>Brevis</span>, um
				resumidor de artigos que transforma artigos longos em resumos claros e
				concisos
			</h2>
		</header>
	);
};

export default Hero;
