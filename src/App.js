import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
    // <div className='wrapper'>
    //   <Header />
    //   <Aside />
    //   <Main />
    //   <Footer />
    // </div>

  );
}

export default App;