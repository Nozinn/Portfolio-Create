import Header from './components/Header'
import HeroSection from './components/HeroSection'
import EducationAndWorkExperience from './sections/shuhrat/edutcation&workExperienceSection'
import Faq from './sections/shuhrat/faqSection'
import Footer from './sections/shuhrat/footer'
import Blogs from './sections/nozin/blogsSection'
import Projects from './sections/nozin/projectsSection'
import Testimonials from './sections/shuhrat/testimonialsSection'

export default function App() {
	return (
		<div>
			<Header />
      <HeroSection />
			{/* Nozin's part: */}
			{/*  Projects and Blogs */}
			<Projects />
			<Blogs />
			{/* Shuhrat's part: */}
			{/*  Education and Work experience */}
			<EducationAndWorkExperience />
			<Testimonials />
			<Faq />
			<Footer />
		</div>
	)
}
