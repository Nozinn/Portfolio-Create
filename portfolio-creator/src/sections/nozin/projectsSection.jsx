import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import Button from '../../components/Button'
import { projects } from './datas'

export default function Projects() {
	return (
		<>
			<section className='mt-25'>
				<div className='max-w-325 mx-auto flex justify-between items-end'>
					<h2 className='text-[54px] font-bold leading-tight'>
						I bring results.
						<br />
						My clients are proof.
					</h2>
					<Button textBut='View all projects' />
				</div>

				<div className='mt-15 bg-[linear-gradient(to_bottom,white_70%,black_70%)]'>
					<div className='max-w-325 mx-auto'>
						<Swiper
							modules={[Navigation]}
							slidesPerView={2.5}
							spaceBetween={24}
							navigation={{
								prevEl: '.projects-prev',
								nextEl: '.projects-next',
							}}
						>
							{projects.map(elem => (
								<SwiperSlide key={elem.id}>
									<div className={`h-80 ${elem.bg}`} />
									<div className='bg-white p-6 flex flex-col gap-2'>
										<span className='text-[#4353FF] text-[12px] font-bold uppercase tracking-[2px]'>
											{elem.category}
										</span>
										<h3 className='text-[24px] font-bold'>{elem.title}</h3>
										<a href='#' className='flex items-center gap-3 text-[16px]'>
											View Project <ArrowRight className='w-4' />
										</a>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>

				<div className='bg-black'>
					<div className='max-w-325 mx-auto flex justify-end gap-4 pt-5'>
						<button className='projects-prev size-10 bg-white flex items-center justify-center cursor-pointer'>
							<ChevronLeft className='w-4' />
						</button>
						<button className='projects-next size-10 bg-white flex items-center justify-center cursor-pointer'>
							<ChevronRight className='w-4' />
						</button>
					</div>
				</div>
			</section>
		</>
	)
}
