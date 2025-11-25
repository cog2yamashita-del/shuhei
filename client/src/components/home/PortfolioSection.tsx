import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Sparkles, Clock } from "lucide-react";
import { Link } from "wouter";

export default function PortfolioSection() {
  const works = [
    {
      category: "コーポレートサイト",
      title: "製造業A社 コーポレートサイト",
      description: "企業ブランディングを重視したコーポレートサイト制作",
      tag: "問い合わせ率150%向上",
    },
    {
      category: "ECサイト",
      title: "小売業B社 ECサイト",
      description: "商品数600点以上を扱うECサイトを構築",
      tag: "オンライン売上前期200%達成",
    },
    {
      category: "ランディングページ",
      title: "サービス業C社 ランディングページ",
      description: "新サービスのローンチに向けたLP制作",
      tag: "CVRが3.5%から6.2%に向上",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">制作実績</h2>
          <p className="text-lg text-muted-foreground">
            これまでに手がけた代表的なプロジェクトをご紹介します
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="group perspective-1000 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-700 cursor-pointer transform-style-3d group-hover:rotate-y-5 group-hover:scale-105">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  {/* アニメーション背景 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500"></div>
                  
                  {/* パルスエフェクト */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-sm rounded-full group-hover:scale-110 transition-transform duration-300">
                      {work.category}
                    </span>
                  </div>
                  
                  {/* ホバー時のオーバーレイ */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Clock className="w-12 h-12 text-white mx-auto mb-2 animate-spin-slow" />
                      <span className="text-white font-bold text-lg">詳細を見る</span>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    {work.title}
                  </CardTitle>
                  <CardDescription className="group-hover:text-foreground transition-colors">
                    {work.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-primary font-semibold group-hover:scale-105 transition-transform">
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    {work.tag}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-600">
          <Link href="/works">
            <Button 
              variant="outline" 
              size="lg"
              className="group hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
              <span className="relative">実績一覧を見る</span>
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform relative" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

