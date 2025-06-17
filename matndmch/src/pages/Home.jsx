import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <About />
      <Services />
    </div>
  );
}
