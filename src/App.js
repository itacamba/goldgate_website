import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main';
import Services from './Components/Services/Services';
import TheProcess from './Components/TheProcess/TheProcess';
import WhyUs from './Components/WhyUs/WhyUs';


function App() {
  return (
    <div>
      <Header />
      <Main/>
      <Services />
      <Gallery />
      <WhyUs />
      <TheProcess />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
