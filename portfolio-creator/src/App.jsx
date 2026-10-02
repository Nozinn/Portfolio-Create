import Header from './components/Header'
import EducationAndWorkExperience from './sections/shuhrat/edutcation&workExperienceSection'
import Testimonials from './sections/shuhrat/testimonialsSection'

export default function App() {
	return (
		<div>
			<Header />
			{/* Shuhrat's part: */}
			{/*  Education and Work experience */}
			<EducationAndWorkExperience />
			<Testimonials/>
		</div>
	)
}
