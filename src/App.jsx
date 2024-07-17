import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Model from "./components/Model";
const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Features />
      <Model />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default App;
