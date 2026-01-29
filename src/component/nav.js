//import logo from './logo.svg';

export default function Nav() {
    return (
      <nav className="w-full bg-[oklch(20.8%_0.042_265.755)] px-6 py-4 text-white text-xl ">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
  
          {/* ロゴ */}
          <a href="#hero" className="text-xl font-bold">
            KYAW HTIN HEIN
          </a>
  
          {/* ハンバーガー（スマホのみ） */}
          <div className=' flex justify-end md:hidden'>
            <button className="bg-blue-500 text-white px-4 py-2 rounded ">☰</button>
          </div>
          {/* メニュー（PCのみ） */}
          <ul className="hidden md:flex  gap-8">
            <li><a href="#main" className="hover:text-blue-200 ">HOME</a></li>
            <li><a href="#about" className="hover:text-blue-200">ABOUT ME</a></li>
            <li><a href="#projects" className="hover:text-blue-200">PROJECTS</a></li>
            <li><a href="#skills" className="hover:text-blue-200">SKILL</a></li>
            <li><a href="#skills" className="hover:text-blue-200">ACTIVITIES</a></li>
          </ul>
  
        </div>
      </nav>
    );
  }
  
  

  