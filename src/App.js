import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Aside from './components/Aside';
import Main from './components/Main';
import Footer from './components/Footer';
import Hero from './components/Hero';


function App() {
  return (

    <div className='wrapper'>
      {/* BrowserRouter enables components to use routing capabilities */}
      <BrowserRouter>
        <Nav />
        <Header />
        <Hero />
        <Aside />
        <Main />
        <Footer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          {/* The ID part is sent through this route, through the placeholder :callItWhateverYouWant, and on to the associated component (Post.js)   */}
          <Route path='/posts/:callItWhateverYouWant' element={<Post />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
