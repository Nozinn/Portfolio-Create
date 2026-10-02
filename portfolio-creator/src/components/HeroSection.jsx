import { ArrowRight } from 'lucide-react'
import Button from './Button'
import img1 from '../assets/IMAGE.png'

export default function HeroSection() {
  return (
	 <div className='w-[85%] m-auto py-20 flex items-center justify-between gap-45'>
		<div>
			<h1 className='text-[72px] font-bold'><span className='text-[#FF8A56]'>I design products</span> that delight and inspire people.</h1>
			<p className='text-[#666666] text-[22px] py-6'>Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups.</p>
			<div className='flex items-center gap-6'>
				<Button textBut='Book a call' />
				<p className='text-[17px]'>Download CV</p>
				<ArrowRight className='w-4' />
			</div>
		</div>
		<img src={img1} alt="photo1" />
	 </div>
  )
}
