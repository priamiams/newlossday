import SEO from '../components/common/SEO';
import Hero from '../components/home/Hero';
import AboutShort from '../components/home/AboutShort';
import Services from '../components/home/Services';
import FeaturedTrips from '../components/home/FeaturedTrips';
import TransportRental from '../components/home/TransportRental';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Partners from '../components/home/Partners';
import Statistics from '../components/home/Statistics';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';

const Home = () => {
  return (
    <>
      <SEO 
        title="Home" 
        description="PT Lossday Sejahtera Group - Travel Agency Premium untuk Open Trip, Private Trip, Corporate Gathering, dan Rental Transportasi." 
      />
      <div className="pt-0">
        <Hero />
        <AboutShort />
        <Services />
        <FeaturedTrips />
        <TransportRental />
        <WhyChooseUs />
        <Partners />
        <Statistics />
        <Testimonials />
        <FAQ />
      </div>
    </>
  );
};

export default Home;
