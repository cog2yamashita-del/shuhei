import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = ["革新的な", "高品質な", "洗練された"];
  const fullText = words[currentWordIndex];

  // タイピングアニメーション
  useEffect(() => {
    setIsVisible(true);
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypedText("");
        }, 2000);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [currentWordIndex]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero-office.jpg')",
      }}
    >
      {/* アニメーション背景パーティクル */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30 animate-gradient-shift"></div>
      
      <div className={`container relative z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-6 animate-slide-down">
          <span className="inline-block px-6 py-2 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-full text-white text-sm font-semibold animate-pulse-slow">
            ✨ WEB制作のプロフェッショナル
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="inline-block animate-slide-up animation-delay-200">自由な発想で、</span><br />
          <span className="inline-block animate-slide-up animation-delay-400">ビジネスに</span>
          <span className="inline-block text-primary animate-scale-in animation-delay-600 mx-3">
            {typedText}
            <span className="animate-blink">|</span>
          </span>
          <span className="inline-block animate-slide-up animation-delay-400">価値を</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in animation-delay-800">
          On Libertyは、あなたのビジネスを加速させるウェブサイトを制作します
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-1000">
          <Link href="/contact">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
              <span className="relative">お問い合わせ</span>
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform relative" />
            </Button>
          </Link>
          <Link href="/works">
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-1"
            >
              制作実績を見る
            </Button>
          </Link>
        </div>
      </div>

      {/* スクロールインジケーター - 強化 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center relative">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll-indicator"></div>
        </div>
        <p className="text-white text-xs mt-2 animate-pulse">SCROLL</p>
      </div>
    </section>
  );
}

