export default function Skills() {
    const skills = {
      python: ["Flask", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow"],
      js: ["JavaScript (Beginner)"],
      languages: [
        { name: "日本語", level: "日本語能力試験 N2" },
        { name: "English", level: "日常会話" },
        { name: "Burmese", level: "Native" } // ミャンマー語も強みなので追加！
      ],
      certs: [
        "Python 3 エンジニア認定データ分析試験",
        "Python 3 エンジニア認定試験（1級/上級）",
        "Python検定試験 Level 6",
        "Internet Basic User Test (iBut)",
      ]
    };
  
    return (
      <section id= "skills" className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold inline-block border-b-4 border-blue-500 pb-2 text-gray-800">
              Skills & Qualifications
            </h2>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* 左側：テクニカルスキル */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-blue-500">●</span> Tech Stack
                </h3>
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <p className="font-bold text-blue-600 mb-2">Python (Main)</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {skills.python.map((s) => (
                      <span key={s} className="bg-white px-3 py-1 rounded-md shadow-sm text-sm border border-gray-200">
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="font-bold text-yellow-600 mb-2">JavaScript</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.js.map((s) => (
                      <span key={s} className="bg-white px-3 py-1 rounded-md shadow-sm text-sm border border-gray-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
  
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-green-500">●</span> Languages
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {skills.languages.map((l) => (
                    <div key={l.name} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                      <span className="font-bold">{l.name}</span>
                      <span className="text-sm text-gray-600">{l.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* 右側：資格（Certificate） */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-yellow-500">●</span> Certificates
              </h3>
              <div className="space-y-4">
                {skills.certs.map((cert, i) => (
                  <div key={i} className="relative pl-8 pb-4 border-l-2 border-blue-100 last:border-0">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                    <p className="text-gray-800 font-medium leading-tight">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  }