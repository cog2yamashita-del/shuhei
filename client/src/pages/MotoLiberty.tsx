import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bike, TrendingUp, Search, Target, Zap, ShoppingCart, Wrench } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function MotoLiberty() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const strengths = [
    {
      icon: <Bike className="w-12 h-12" />,
      title: "二輪業界特化",
      description: "バイクショップ、カスタムショップ、パーツ販売店など、二輪業界に特化したウェブサイト制作の豊富な実績があります。",
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "二輪業界SEOの専門知識",
      description: "「バイク カスタム 地域名」「バイク 修理 近く」など、二輪業界特有の検索キーワードを熟知し、効果的なSEO対策を実施します。",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "集客力の向上",
      description: "Googleマイビジネス最適化、SNS連携、コンテンツマーケティングなど、多角的なアプローチで集客力を最大化します。",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "ターゲット層への訴求",
      description: "バイク愛好家、カスタム志向のライダー、メンテナンス重視のユーザーなど、ターゲット層に響くデザインとコンテンツを提供します。",
    },
  ];

  const seoKeywords = [
    { keyword: "バイク カスタム", volume: "高", difficulty: "中" },
    { keyword: "バイク 修理", volume: "高", difficulty: "低" },
    { keyword: "バイク パーツ", volume: "高", difficulty: "中" },
    { keyword: "DYNOJET 販売", volume: "中", difficulty: "低" },
    { keyword: "Power Commander", volume: "中", difficulty: "低" },
    { keyword: "バイク 燃調", volume: "中", difficulty: "低" },
  ];



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative z-10">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <Bike className="w-16 h-16 text-primary animate-pulse" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                二輪業界特化サービス
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-6">
              MOTO LIBERTYとの連携で、DYNOJET社製品を特別価格でご提供
            </p>
            <p className="text-lg text-muted-foreground">
              二輪業界に特化したSEO対策と集客支援で、あなたのビジネスを加速させます
            </p>
          </div>
        </div>
      </section>

      {/* MOTO LIBERTY Partnership Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">MOTO LIBERTYとの連携</h2>
            <p className="text-lg text-muted-foreground">
              On LibertyはMOTO LIBERTYと連携し、二輪業界のお客様に特別なサービスを提供します
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <ShoppingCart className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">DYNOJET製品を特別価格で</CardTitle>
                <CardDescription className="text-base">
                  MOTO LIBERTYとの提携により、DYNOJET社の高性能製品を市場価格よりも安価でご提供できます。
                  Power Commanderをはじめとする各種製品の導入をサポートいたします。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>市場価格より安価な特別価格</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>豊富な製品ラインナップ</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>迅速な納品対応</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>アフターサポート充実</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Wrench className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">技術サポート付き</CardTitle>
                <CardDescription className="text-base">
                  製品の導入から設定、トラブルシューティングまで、専門スタッフがサポートします。
                  安心してご利用いただけます。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>導入コンサルティング</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>初期セッティングサポート</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>技術トレーニング</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>継続的なアフターサポート</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6">
                DYNOJET製品について問い合わせる
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Strengths Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">二輪業界SEOの強み</h2>
            <p className="text-lg text-muted-foreground">
              二輪業界特有のSEO対策で、検索エンジンからの集客を最大化
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {strengths.map((strength, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex justify-center mb-4 text-primary">
                    {strength.icon}
                  </div>
                  <CardTitle className="text-xl">{strength.title}</CardTitle>
                  <CardDescription className="text-base">{strength.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">対策キーワード例</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {seoKeywords.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-semibold">{item.keyword}</p>
                    </div>
                    <div className="flex gap-4 text-sm">
                      <span className="text-muted-foreground">検索量: <span className="text-primary font-semibold">{item.volume}</span></span>
                      <span className="text-muted-foreground">難易度: <span className="text-primary font-semibold">{item.difficulty}</span></span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            二輪業界のビジネスを加速させませんか？
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            DYNOJET製品の特別価格提供から、SEO対策、集客支援まで、<br />
            二輪業界に特化した総合的なサポートをご提供します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-12 py-6 hover:scale-110 transition-all duration-300">
                無料相談を申し込む
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="text-lg px-12 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-primary transition-all duration-300">
                料金プランを見る
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

