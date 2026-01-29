export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white pt-20 pb-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            
            {/* 左側：メッセージと連絡先情報 */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Get In Touch</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                プロジェクトに関するご相談や、技術的なお話など、お気軽にお問い合わせください。
                内容を確認次第、24時間以内にご返信いたします。
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <span>kyawhtin.example@gmail.com</span> {/* 自分のアドレスに！ */}
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <span>Saitama, Japan</span>
                </div>
              </div>
  
              {/* SNSリンク */}
              <div className="flex gap-4 mt-10">
                <a href="https://github.com/Kyawhtin21501" target="_blank" className="hover:text-blue-400 transition-colors" rel="noreferrer">GitHub</a>
                <a href="https://github.com/Kyawhtin21501" className="hover:text-blue-400 transition-colors">LinkedIn</a>
                <a href="https://github.com/Kyawhtin21501" className="hover:text-blue-400 transition-colors">Facebook</a>
              </div>
            </div>
  
            {/* 右側：Mail Box (お問い合わせフォーム) */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="お名前"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <textarea 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 h-32 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="メッセージを入力してください"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-all transform active:scale-95"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
  
          {/* コピーライト */}
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© 2026 Kyaw Htin Hein. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }