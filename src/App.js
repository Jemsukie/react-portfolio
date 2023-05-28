import About from './components/About/About';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Navbar from './components/Navbar/Navbar';
import './index.css'

function App() {
  return (
    <div className="App">

      <main className="bg-body font-Montserrat pb-12 scroll-behavior: smooth; overflow-scroll">

        <header className="py-6" >
          <Navbar />
          <Jumbotron />

          <About />
        </header>
      </main>
    </div>
  );
}

export default App;
