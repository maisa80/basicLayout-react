import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Aside from './components/Aside';
import Main from './components/Main';
import Footer from './components/Footer';
import Hero from './components/Hero';

import Adverts from './pages/Adverts';
import Home from './pages/Home';
import Login from './pages/Login';
import AddAdverts from './pages/AddAdverts';


function App() {
  return (

    <div className='wrapper'>
      {/* BrowserRouter enables components to use routing capabilities */}
      <BrowserRouter>

        <Header />
       
        <Footer />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/adverts' element={<Adverts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/add advert' element={<AddAdverts/>}/>
          {/* The ID part is sent through this route, through the placeholder :callItWhateverYouWant, and on to the associated component (Post.js)   */}
          {/* <Route path='/posts/:callItWhateverYouWant' element={<Post />} /> */}
          {/* <Route path='/contact' element={<Contact />} />  */}
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
