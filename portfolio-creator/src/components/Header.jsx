import logo from '../assets/IMAGE.svg'
import Link from './Links'
import { ArrowRight } from 'lucide-react'

const Header = () => {
	return (
		<div className='w-[85%] m-auto py-10 flex justify-between items-center'>
			<img src={logo} alt='logo' />
			<div className='flex items-center gap-2'>
				<ul className='flex items-center gap-9'>
					<Link link='About' />
					<Link link='Services' />
					<Link link='Projects' />
					<Link link='Blog' />
					<Link link='Book a call' />
				</ul>
				<ArrowRight className='w-3' />
			</div>
		</div>
	)
}

export default Header
