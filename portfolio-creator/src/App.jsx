import Header from './components/Header'
import HeroSection from './components/HeroSection'
import EducationAndWorkExperience from './sections/shuhrat/edutcation&workExperienceSection'
import Faq from './sections/shuhrat/faqSection'
import Footer from './sections/shuhrat/footer'
import Testimonials from './sections/shuhrat/testimonialsSection'

export default function App() {
	return (
		<div>
			<Header />
      <HeroSection />
			{/* Shuhrat's part: */}
			{/*  Education and Work experience */}
			<EducationAndWorkExperience />
			<Testimonials />
			<Faq />
			<Footer />
		</div>
	)
}
