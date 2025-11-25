import { TrendingUp } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function StatisticsSection() {
  const [satisfaction, setSatisfaction] = useState(0);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // カウントアップアニメーション
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isStatsVisible) {
          setIsStatsVisible(true);
          
          const duration = 2000;
          const steps = 60;
          const stepDuration = duration / steps;

          let currentStep = 0;
          const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            
            setSatisfaction(Math.floor(99 * progress));

            if (currentStep >= steps) {
              clearInterval(interval);
              setSatisfaction(99);
            }
          }, stepDuration);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isStatsVisible]);

  return (
    <section ref={statsRef} className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-y border-primary/20">
      <div className="container">
        <div className="flex justify-center">
          <div className="group hover:scale-110 transition-transform duration-300 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <TrendingUp className="w-12 h-12 text-primary animate-bounce-slow" />
              <div className="text-6xl md:text-7xl font-bold text-primary animate-count-up">
                {satisfaction}%
              </div>
            </div>
            <p className="text-xl text-muted-foreground font-semibold">顧客満足度</p>
          </div>
        </div>
      </div>
    </section>
  );
}
