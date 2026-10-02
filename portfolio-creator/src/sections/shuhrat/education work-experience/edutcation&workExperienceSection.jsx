import { MoveUpRight } from 'lucide-react'
import { education, workExperience } from '../datas'

export default function EducationAndWorkExperience() {
	return (
		<>
			<section className='max-w-325 mx-auto flex justify-between items-center'>
				<article className=' w-[45%] flex flex-col gap-8'>
					<h2 className='text-[36px] font-normal'>📚 Education</h2>
					<div className='flex flex-col gap-4'>
						{education.map(elem => (
							<div key={elem.id} className='border-b border-[#E5E5E5] pb-3'>
								<div className='flex justify-between items-center'>
									<h2 className='text-[24px] font-bold'>{elem.universe}</h2>
									<MoveUpRight />
								</div>
								<div className='flex justify-between items-center pr-20		'>
									<p className='text-[16px] text-[#00000099]'>
										{elem.description}
									</p>
									<span className='text-[16px] text-[#00000099]'>
										{elem.years}
									</span>
								</div>
							</div>
						))}
					</div>
				</article>

				<article className=' w-[45%] flex flex-col gap-8'>
					<h2 className='text-[36px] font-normal'>💼 Work Experience</h2>
					<div className='flex flex-col gap-4'>
						{workExperience.map(elem => (
							<div
								key={elem.id}
								className='flex w-full items-center gap-3 pb-3'
							>
								<img src={elem.icon} className='size-10' />
								<div className='w-full'>
									<div className='flex justify-between items-center'>
										<h2 className='text-[24px] font-bold'>{elem.workPlace}</h2>
										<MoveUpRight />
									</div>
									<div className='flex justify-between items-center pr-20		'>
										<p className='text-[16px] text-[#00000099]'>{elem.job}</p>
										<span className='text-[16px] text-[#00000099]'>
											{elem.date}
										</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</article>
			</section>
		</>
	)
}
