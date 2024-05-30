import './App.css';
import Home from './components/Home';
import About from './components/About';
import WhatsOn from './components/WhatsOn';
import Location from './components/Location';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Animation from './Animation.tsx';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div>
      <Animation>
        <Home />
        <About />
        <WhatsOn />
        <Location />
        <SignUp />
        <Footer />
      </Animation>
      <BackToTop />
    </div>
  );
}

export default App;
