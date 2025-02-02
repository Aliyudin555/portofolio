import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from'./components/sidebar/sidebar';
import About from './components/about/about';
import Home from'./components/home/home';
import Project from './components/project/project';

const App =()=>{
  return(
    <>
    <Sidebar/>
    <main className='main'>
      <Home/>
      <About/>
      <Project/>
    </main>
    </>
  )
}

export default App
