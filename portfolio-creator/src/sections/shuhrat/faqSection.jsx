import { Collapse } from 'antd'
import { faq } from './datas'

function Faq() {
	const onChange = key => {
		console.log(key)
	}

	return (
		<>
			<section className='bg-black text-white py-8 mt-25'>
				<div className='max-w-325 mx-auto text-center flex flex-col gap-15'>
					<div>
						<span className='text-[#FF8A56] font-bold'>FAQ</span>
						<h2 className='text-[54px] font-bold'>
							Frequently asked questions
						</h2>
					</div>

					<div className='flex justify-between'>
						<Collapse
							items={faq.slice(0, 4)}
							onChange={onChange}
							styles={{
								header: {
									color: 'white',
								},
								body: {
									color: 'white',
									backgroundColor: 'black',
								},
							}}
							className='w-[45%] text-start'
						/>
						<Collapse
							className='w-[45%] text-start'
							items={faq.slice(4)}
							onChange={onChange}
							styles={{
								header: {
									color: 'white',
								},
								body: {
									color: 'white',
									backgroundColor: 'black',
								},
							}}
						/>
					</div>
				</div>
			</section>
		</>
	)
}

export default Faq
