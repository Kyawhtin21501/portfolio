export default function Activities() {
    // ギャラリーに表示する写真とキャプションのデータ
    const photos = [
      {
        src: "/image1.jpg", // publicフォルダの写真ファイル名
        alt: "Pythonプログラミング教室の様子",
        caption: "中高生向けプログラミング講座でのアシスタント活動"
      },
      {
        src: "/image2.jpg",
        alt: "Pythonプログラミング教室の様子",
        caption: "中高生向けプログラミング講座でのアシスタント活動"
      },
      {
        src: "/image3.jpg",
        alt: "カフェでの勉強風景",
        caption: "新入生代表"
      }
      
  
    ];
  
    return (
      <section id="act" className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          {/* セクションタイトル */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold inline-block border-b-4 border-blue-500 pb-2 text-gray-800">
              Activities Gallery
            </h2>
            <p className="text-gray-600 mt-4">これまでの活動や日常の様子</p>
          </div>
  
          {/* フォトギャラリーのグリッド */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              // group クラスを付けて、ホバー時の親要素にする
              <div key={index} className="relative group h-72 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                {/* 写真本体 */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  // object-coverで枠いっぱいに表示、ホバー時に少し拡大させる
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
  
                {/* ホバー時に浮かび上がるオーバーレイとキャプション */}
                {/* 初期は opacity-0 (透明) にしておき、group-hover で opacity-100 (表示) にする */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }