import EnquiryCTA from "../components/EnquiryCTA";
import FeaturedProjects from "../components/FeaturedProjects";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <EnquiryCTA />
    </>
  );
}

export default Home;
