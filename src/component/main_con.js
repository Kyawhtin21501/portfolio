
export default function MainScreen() {
    return (
       
    <div id= "main" className="min-w-full relative "> {/* relative を追加 */}
        <img 
            src="/image5.jpg" 
            alt="メイン写真" 
            className="w-full object-cover h-[1000px]" 
        />
        {/* 画像の上に重なる文字セット */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
            <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
            <p className="mt-4 text-xl font-light tracking-widest text-gray-200">Back-End and Machine Learning Enginner</p>
        </div>
    </div>
    );
}