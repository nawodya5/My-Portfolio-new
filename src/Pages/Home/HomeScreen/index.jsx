import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
import Testimonial from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills></MySkills>
      <AboutMe></AboutMe>
      <MyPortfolio></MyPortfolio>
      <Testimonial></Testimonial>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </>
  );
}
