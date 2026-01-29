import Navbar from './component/nav';
import Main from './component/main_con'
import About  from './component/about';
import Pro from './component/pro'
import Skills from './component/skills'
import Activities from './component/act';
import Footer from './component/foot';
import './App.css';

export default function App() {
  return (
    <div> 
      <div className='sticky top-0 z-50 bg-white shadow-md '>
        <Navbar />
      </div>
      <div>
        <Main/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Pro/>
      </div>
      <div>
        <Skills/>
      </div>
      <div>
        <Activities/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

