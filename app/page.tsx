import { HoverImageLinks } from '@/components/block/work-section'
import AboutMe from '@/components/block/about-me'
import HeroSection from '@/components/block/hero-section'
import SkillServices from '@/components/block/skill_services'
import WorkSection from '@/components/block/selected-work'
import FooterSection from '@/components/block/fotter-section'


const Home = () => {
  return (
    <div className='md:pl-4 xl:pl-20'>
      <HeroSection />
      <WorkSection />
      <AboutMe />
      <SkillServices />
      <FooterSection />
    </div>
  )
}

export default Home