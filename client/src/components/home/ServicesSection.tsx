import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Laptop, Rocket, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function ServicesSection() {
  const services = [
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "コーポレートサイト制作",
      description: "企業の顔となるコーポレートサイトを、ブランドイメージに合わせて制作します。",
      delay: "0ms",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "ECサイト構築",
      description: "商品の魅力を最大限に引き出すECサイトを構築し、売上向上に貢献します。",
      delay: "100ms",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "ランディングページ制作",
      description: "コンバージョン率を最大化する設計で、マーケティング効果を高めます。",
      delay: "200ms",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "ウェブシステム開発",
      description: "業務効率化や顧客管理など、お客様のニーズに合わせたシステムを開発します。",
      delay: "300ms",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>

      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
            サービス
          </h2>
          <p className="text-lg text-muted-foreground">
            お客様のビジネスに最適なソリューションを提供します
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary cursor-pointer overflow-hidden animate-slide-up relative"
              style={{ animationDelay: service.delay }}
            >
              {/* ホバー時の背景エフェクト */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500"></div>
              
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                  {service.icon}
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="group-hover:text-foreground transition-colors">
                  {service.description}
                </CardDescription>
              </CardContent>

              {/* 角の装飾 */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-600">
          <Link href="/services">
            <Button 
              variant="outline" 
              size="lg"
              className="group hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
              <span className="relative">サービス詳細を見る</span>
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform relative" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

