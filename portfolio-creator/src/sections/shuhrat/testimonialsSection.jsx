import vergulReverse from '../../assets/shuhrat/icons/vergulReverse.png'
import frankin from '../../assets/shuhrat/images/frankin.png'

export default function Testimonials() {
	return (
		<>
			<section className='max-w-325 mx-auto mt-25'>
				<span className='text-[#4353FF] text-[22px] font-bold'>
					Testimonials
				</span>
				<h2 className=' text-[54px] font-bold'>Word on the street</h2>
				<div className='flex justify-between items-end mt-10'>
					<img src={frankin} className='w-[45%]' />
					<article className='w-[45%] flex flex-col gap-25 items-start'>
						<img src={vergulReverse} />
						<p className=' text-[36px] font-bold'>
							Jade helped us build a software so intuitive that it didn't need a
							walkthrough. He solved complex problems with brilliant design.
						</p>
						<div>
							<div>
								<p className='font-bold'>John Frankin</p>
								<span>Founder, Double Bunch</span>
							</div>
						</div>
					</article>
				</div>
			</section>
		</>
	)
}
