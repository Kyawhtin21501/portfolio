export default function Projects() {
    const projectList = [
      {
        title: "お任せシフト",
        description: "外食業界向けのシステム。過去の売上データを学習して将来の予測を行い、その結果に基づき数理最適化アルゴリズムで最適なシフトを自動生成するWeb/Mobileアプリです。",
        tech: ["Python", "Flutter", "Machine Learning", "Flask", "Optimization","Postgre Database"],
        link: "https://github.com/Kyawhtin21501/CCC_project.git", 
        video: "/CCC_preoject.mov" // publicフォルダに配置
      },
    ];
  
    return (
      <section id= "projects" className="py-20 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold inline-block border-b-4 border-blue-500 pb-2 text-gray-800">
              Projects
            </h2>
            <p className="text-gray-600 mt-4">技術と課題解決を組み合わせた制作実績</p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectList.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                
                {/* 動画・プレビュー部分 */}
                <div className="h-56 bg-black relative overflow-hidden">
                  {project.video ? (
                    <video 
                      src={project.video}
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold italic text-xl">
                      {project.title}
                    </div>
                  )}
                  {/* 動画の上にうっすらラベルを表示 */}
                  <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded">
                    Demo Video
                  </div>
                </div>
  
                {/* コンテンツ部分 */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-semibold bg-blue-50 text-blue-600 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
  
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    GitHubでコードを見る
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }