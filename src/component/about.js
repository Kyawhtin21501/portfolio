export default function AboutMe() {
    return (
      <section id="about"className="max-w-5xl mx-auto py-20 px-6 bg-white text-gray-800">
        {/* 見出し */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold inline-block border-b-4 border-blue-500 pb-2">
            About Me
          </h2>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* 左側：強みと経験（メイン文章） */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold text-blue-600">
              課題解決に向けた分析力と実行力
            </h3>
            <p className="leading-relaxed text-lg">
              私の強みは、周囲の課題を冷静に分析し、解決策を考え実行できる点です。
              アルバイトでは店長と協力し、データに基づいた売上改善や人件費の最適化 に取り組みました。
              この経験を技術面にも活かし、学校では 機械学習を搭載したアプリ開発 でチームを成功に導きました。
            </p>
            <p className="leading-relaxed text-lg">
              また、教育ボランティアとして中高生に Python を教える中で、相手に合わせた伝える力 を磨きました。
              現場での課題解決力と、チームで成果を出すコミュニケーション力を武器に、御社に貢献したいと考えています。
            </p>
          </div>
  
          {/* 右側：特技・趣味・スキル（カード形式） */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-inner space-y-6">
            <div>
              <h4 className="font-bold text-gray-700 border-l-4 border-blue-400 pl-2 mb-3">特技・得意科目</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>データ分析・統計学</li>
                <li>情報処理</li>
                <li>Python によるアプリ開発</li>
              </ul>
            </div>
  
            <div>
              <h4 className="font-bold text-gray-700 border-l-4 border-blue-400 pl-2 mb-3">趣味・リフレッシュ</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-white px-3 py-1 rounded-full text-sm shadow-sm border border-gray-200"> IT関連の読書</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm shadow-sm border border-gray-200"> 文章執筆</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm shadow-sm border border-gray-200">ギター</span>
              </div>
            </div>
          </div>
  
        </div>
      </section>
    );
  }