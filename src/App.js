import { useEffect } from 'react';
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
  const scrollToTop = () =>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  const handlerScroll = () =>{
    console.log("scrolling");
    console.log(window.scrollY);
  }
  useEffect(()=>{
    const timer = setInterval(()=>{
      window.addEventListener("scroll",handlerScroll);
    },100);
    return()=>{
      clearInterval(timer);
      window.removeEventListener("scroll",handlerScroll);
    }
  })
  return (
    <div className="App">
    <Header scrollToTop={scrollToTop}/> 
    <Routes>
      <Route path='/main' element={<Main/>}/>
      <Route path='/aboutme' element={<AboutMe2/>}/>
      <Route path='/project' element={<Project3/>}/>
      <Route path='/contact' element={<Contact4/>}/>
      <Route path='/seemore' element={<SeeMore/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
