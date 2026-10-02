export default function Footer() {
	return (
		<>
			<footer className='bg-black text-white pb-10 pt-30'>
				<div className='max-w-325 mx-auto'>
					<h2 className='text-[54px] font-bold'>
						Ready to make something kickass?
					</h2>
					<h2 className='text-[54px] font-bold text-[#3C46FF]'>
						Let's get on a call.
					</h2>

					<div className='flex justify-between items-center mt-15'>
						<div className='flex flex-col gap-4'>
							<p>Portfolio Creator</p>
							<span className='text-[#666666] text-[16px]'>4353 Delaware Avenue, San Francisco, USA</span>
							<span className='text-[#666666] text-[16px]'>hi@thefolio.com</span>
						</div>
						<div className='flex gap-20'>
							<ul className='flex flex-col gap-4'>
								<li>About</li>
								<li>Contact</li>
								<li>Dribbble</li>
							</ul>
							<ul className='flex flex-col gap-4'>
								<li>Services</li>
								<li>Blog</li>
								<li>Instagram</li>
							</ul>
							<ul className='flex flex-col gap-4'>
								<li>Experience</li>
								<li>Projects</li>
								<li>Twitter</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
