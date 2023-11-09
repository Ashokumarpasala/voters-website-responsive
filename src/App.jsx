import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Features from './components/Features';
import About from './components/About';
import Vote from './components/Vote';
import Card from './Card';
import Caroules from './Caroules';

function App() {
  return (
<>
    <Nav />
    <div  className='container-lg'>
      <Caroules />
     <Features />
    </div>
      <Card />
    <About />
    <div  className='container-lg'>
    <Vote />
    </div>

</>
  );
}

export default App;
