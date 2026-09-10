import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';

function HomePage() {
  return (
    <main>
      <Hero />
      
      {/* Placeholder sections - to be implemented */}
      <section id="story" className="section-padding bg-ivory">
        <div className="container">
          <h2 className="text-section text-cocoa mb-8">Our Story</h2>
          <p className="text-lg text-sand max-w-2xl">
            Every kernel has a beginning. [Location - Palanpur] - where tradition meets precision.
          </p>
        </div>
      </section>

      <section id="process" className="section-padding bg-cream">
        <div className="container">
          <h2 className="text-section text-cocoa mb-8">The Journey of a Kernel</h2>
          <p className="text-lg text-sand max-w-2xl">
            From raw material to global dispatch - eight stages of precision processing.
          </p>
        </div>
      </section>

      <section id="products" className="section-padding bg-ivory">
        <div className="container">
          <h2 className="text-section text-cocoa mb-8">Products</h2>
          <p className="text-lg text-sand max-w-2xl">
            Premium cashew grades for discerning buyers worldwide.
          </p>
        </div>
      </section>

      <section id="quality" className="section-padding bg-cocoa text-cream">
        <div className="container">
          <h2 className="text-section text-ivory mb-8">Quality</h2>
          <p className="text-lg text-sand max-w-2xl">
            The difference is in the details. Selected. Inspected. Approved.
          </p>
        </div>
      </section>

      <section id="global" className="section-padding bg-ivory">
        <div className="container">
          <h2 className="text-section text-cocoa mb-8">Global Reach</h2>
          <p className="text-lg text-sand max-w-2xl">
            From Palanpur to the world. Connecting quality with demand across continents.
          </p>
        </div>
      </section>

      <section id="contact" className="section-padding bg-obsidian text-cream">
        <div className="container">
          <h2 className="text-section text-ivory mb-8">Contact</h2>
          <p className="text-lg text-sand max-w-2xl mb-8">
            Let's talk about your next shipment.
          </p>
          <a
            href="tel:+919265918347"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-obsidian font-medium uppercase tracking-wider hover:bg-cream transition-colors"
          >
            Call Now
          </a>
        </div>
      </section>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
