import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden">
      {/* 波のアニメーション */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent animate-wave"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent animate-wave animation-delay-500"></div>
      </div>

      {/* パーティクル */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-white/20 rounded-full animate-float-random"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
          まずはお気軽にご相談ください
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          お客様のビジネス課題をお聞かせください。最適なソリューションをご提案いたします。
        </p>
        <Link href="/contact">
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-12 py-6 hover:scale-110 transition-all duration-300 hover:shadow-2xl group relative overflow-hidden animate-fade-in-up animation-delay-400"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
            <span className="relative">お問い合わせ</span>
            <ArrowRight className="ml-2 group-hover:translate-x-3 group-hover:scale-125 transition-all relative" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

