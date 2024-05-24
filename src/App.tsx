import './App.css';
import Home from './components/Home';
import About from './components/About';
import WhatsOn from './components/WhatsOn';
import Location from './components/Location';
import GetInvolved from './components/GetInvolved';
import Footer from './components/Footer';
import Animation from './Animation.tsx';

function App() {
  return (
    <Animation>
      <Home />
      <About />
      <WhatsOn />
      <Location />
      <GetInvolved />
      <Footer />
    </Animation>
  );
}

export default App;
