import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Music from "@/components/Music";
import Videos from "@/components/Videos";
import TourDates from "@/components/TourDates";
import Newsletter from "@/components/Newsletter";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Music />
        <TourDates />
        <Videos />
        <Newsletter />
        <About />
      </main>
      <Footer />
    </>
  );
}
