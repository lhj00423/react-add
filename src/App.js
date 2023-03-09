import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import SeeMore from './pages/container/SeeMore';
import AboutMe2 from './pages/main/AboutMe2';
import Contact4 from './pages/main/Contact4';
import Project3 from './pages/main/Project3';


function App() {
  return (
    <div className="App">
    <Header/> 
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/' element={<AboutMe2/>}/>
      <Route path='/' element={<Project3/>}/>
      <Route path='/' element={<Contact4/>}/>
      <Route path='/seemore' element={<SeeMore/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
