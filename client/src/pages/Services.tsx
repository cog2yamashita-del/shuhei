import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check, Code, Laptop, Rocket, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: "corporate",
      icon: <Laptop className="w-12 h-12" />,
      title: "コーポレートサイト制作",
      description: "企業の顔となるコーポレートサイトを、ブランドイメージに合わせて制作します。信頼感と専門性を伝えるデザインで、ビジネスの成長をサポートします。",
      features: [
        "レスポンシブデザイン対応",
        "SEO最適化",
        "CMS導入による更新性の確保",
        "アクセス解析設定",
        "お問い合わせフォーム実装",
        "SSL証明書対応",
      ],
      price: "月額19,800円〜（初期費用150,000円）",
    },
    {
      id: "ec",
      icon: <Code className="w-12 h-12" />,
      title: "ECサイト構築",
      description: "商品の魅力を最大限に引き出すECサイトを構築します。使いやすい管理画面と、購入までスムーズな導線設計で、売上向上に貢献します。",
      features: [
        "カート機能・決済システム導入",
        "在庫管理システム",
        "顧客管理機能",
        "セキュリティ対策",
        "レスポンシブデザイン",
        "売上分析ダッシュボード",
      ],
      price: "月額39,800円〜（初期費用300,000円）",
    },
    {
      id: "lp",
      icon: <Rocket className="w-12 h-12" />,
      title: "ランディングページ制作",
      description: "商品やサービスの訴求に特化したランディングページを制作します。コンバージョン率を最大化する設計で、マーケティング効果を高めます。",
      features: [
        "コンバージョン最適化",
        "A/Bテスト対応",
        "広告連携",
        "高速表示",
        "フォーム最適化",
        "アクセス解析",
      ],
      price: "月額9,800円〜（初期費用50,000円）",
    },
    {
      id: "system",
      icon: <Sparkles className="w-12 h-12" />,
      title: "ウェブシステム開発",
      description: "業務効率化や顧客管理など、お客様のニーズに合わせたカスタムシステムを開発します。スケーラブルな設計で、ビジネスの成長に対応します。",
      features: [
        "要件定義からサポート",
        "スケーラブルな設計",
        "API連携",
        "セキュリティ重視",
        "クラウド対応",
        "保守・運用サポート",
      ],
      price: "要相談",
    },
  ];

  const process = [
    {
      step: "01",
      title: "お問い合わせ・ヒアリング",
      description: "お客様のビジネス課題やご要望を詳しくお伺いします。",
    },
    {
      step: "02",
      title: "企画・提案",
      description: "ヒアリング内容を基に、最適なソリューションをご提案します。",
    },
    {
      step: "03",
      title: "設計・デザイン",
      description: "サイト構成やデザインを作成し、お客様と共に詰めていきます。",
    },
    {
      step: "04",
      title: "開発・実装",
      description: "デザインを基に、高品質なコーディングで実装します。",
    },
    {
      step: "05",
      title: "テスト・検証",
      description: "動作確認やブラウザチェックを行い、品質を担保します。",
    },
    {
      step: "06",
      title: "公開・運用",
      description: "サイトを公開し、運用サポートを提供します。",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/50 overflow-hidden">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              サービス
            </h1>
            <p className={`text-lg text-muted-foreground transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              お客様のビジネスに最適なウェブソリューションを提供します。
              コーポレートサイトからECサイト、ウェブシステム開発まで、幅広く対応いたします。
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-20' : 'translate-x-20'}`}`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
              >
                <div className="flex-1">
                  <Card className="h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 hover:scale-110 hover:rotate-12 transition-all duration-300">
                        {service.icon}
                      </div>
                      <CardTitle className="text-3xl mb-4">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-4">主な機能・特徴</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 hover:translate-x-2 transition-all duration-300">
                              <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-6 border-t">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">料金目安</p>
                            <p className="text-2xl font-bold text-primary">{service.price}</p>
                          </div>
                          <Link href="/contact">
                            <Button className="hover:scale-110 transition-all duration-300">
                              お問い合わせ
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex-1">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center overflow-hidden hover:scale-105 transition-all duration-500">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 animate-pulse">
                        {service.icon}
                      </div>
                      <p className="text-muted-foreground">
                        {service.title}のイメージ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50 overflow-hidden">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              制作の流れ
            </h2>
            <p className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              お問い合わせから公開まで、6つのステップで進めます
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <CardHeader>
                  <div className="text-6xl font-bold text-primary/10 absolute -top-4 -right-4 transition-all duration-300 group-hover:scale-110">
                    {item.step}
                  </div>
                  <div className="text-sm text-primary font-semibold mb-2">STEP {item.step}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <Card className={`bg-gradient-to-br from-primary to-primary/80 text-primary-foreground hover:shadow-2xl transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '1200ms' }}>
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                お客様に最適なプランをご提案します
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                まずはお気軽にご相談ください。お客様のビジネス課題をお聞かせください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="hover:scale-110 transition-all duration-300">
                    お問い合わせ
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 hover:scale-110 transition-all duration-300">
                    料金プランを見る
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

