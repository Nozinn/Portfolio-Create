import { ArrowRight } from 'lucide-react'
import { blogs } from './datas'

export default function Blogs() {
	return (
		<>
			<section className='bg-black text-white pt-10 pb-25'>
				<div className='max-w-325 mx-auto flex justify-between items-start'>
					<div className='w-[35%] flex flex-col gap-4'>
						<span className='text-[#FF8A56] font-bold uppercase tracking-[2px]'>
							Blogs
						</span>
						<h2 className='text-[54px] font-bold'>Latest Blogs</h2>
						<a href='#' className='flex items-center gap-3'>
							View all <ArrowRight className='w-4' />
						</a>
					</div>

					<div className='w-[60%] flex flex-col gap-10'>
						{blogs.map(elem => (
							<article
								key={elem.id}
								className='flex flex-col gap-5 pb-10 border-b border-[#FFFFFF33]'
							>
								<span className='text-[14px] text-[#FFFFFFCC]'>
									{elem.date} · {elem.read}
								</span>
								<h3 className='text-[28px] font-bold w-[80%]'>{elem.title}</h3>
								<a href='#' className='flex items-center gap-3 font-bold'>
									Read the article <ArrowRight className='w-4' />
								</a>
							</article>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
