import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check, Info } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const plans = [
    {
      name: "ベーシックプラン",
      monthlyPrice: "19,800円",
      setupFee: "50,000円",
      description: "シンプルなサイトで素早くビジネスを始めたい方に",
      features: [
        "レスポンシブデザイン",
        "基本的なSEO対策",
        "お問い合わせフォーム",
        "コンテンツ更新対応",
        "メールサポート",
      ],
      recommended: false,
    },
    {
      name: "スタンダードプラン",
      monthlyPrice: "32,000円",
      setupFee: "150,000円",
      description: "本格的なコーポレートサイトを運用したい方に",
      features: [
        "カスタムデザイン",
        "高度なSEO対策",
        "アクセス解析設定",
        "コンテンツ更新対応",
        "コンテンツ追加サポート",
        "電話・メールサポート",
      ],
      recommended: true,
    },
    {
      name: "プロフェッショナルプラン",
      monthlyPrice: "45,000円",
      setupFee: "300,000円",
      description: "ECサイトや高機能サイトを本格運用したい方に",
      features: [
        "ECサイト機能",
        "決済システム導入",
        "在庫管理機能",
        "コンテンツ更新対応",
        "月次レポート提供",
        "優先サポート",
        "セキュリティ対策",
      ],
      recommended: false,
    },
    {
      name: "エンタープライズプラン",
      monthlyPrice: "要相談",
      setupFee: "要相談",
      description: "大規模サイトやシステム開発をお考えの企業様に",
      features: [
        "フルカスタム開発",
        "既存システムとの連携",
        "専属サポート担当",
        "コンテンツ更新対応",
        "SLA保証",
        "24時間365日サポート",
        "定期的なセキュリティ監査",
      ],
      recommended: false,
    },
  ];

  const additionalOptions = [
    {
      category: "ページ追加",
      items: [
        { name: "追加ページ制作", price: "6,000円〜/ページ", description: "新規ページの追加制作" },
      ],
    },
    {
      category: "機能追加",
      items: [
        { name: "予約システム", price: "80,000円〜", description: "オンライン予約機能" },
        { name: "会員システム", price: "150,000円〜", description: "会員登録・ログイン機能" },
        { name: "決済システム", price: "100,000円〜", description: "クレジットカード決済対応" },
      ],
    },
    {
      category: "デザイン・コンテンツ",
      items: [
        { name: "ロゴデザイン", price: "50,000円〜", description: "オリジナルロゴの制作" },
        { name: "バナー制作", price: "10,000円/枚", description: "広告用バナー画像" },
        { name: "写真撮影", price: "50,000円〜", description: "プロカメラマンによる撮影" },
        { name: "ライティング", price: "15,000円/ページ", description: "SEOライティング" },
      ],
    },
    {
      category: "マーケティング",
      items: [
        { name: "SEO対策強化", price: "+10,000円/月", description: "キーワード分析・最適化" },
        { name: "広告運用代行", price: "広告費の20%", description: "Google/SNS広告運用" },
        { name: "SNS運用サポート", price: "30,000円/月", description: "投稿代行・分析" },
      ],
    },
  ];

  const priceFactors = [
    {
      factor: "機能の複雑さ",
      description: "予約システム、会員機能、決済機能などの追加",
      example: "シンプルなサイト → EC機能付きで約3倍",
    },
    {
      factor: "デザインのカスタマイズ度",
      description: "テンプレート利用かフルオーダーメイドか",
      example: "テンプレート → フルカスタムで約2倍",
    },
    {
      factor: "サポート内容",
      description: "メールのみか電話対応も含むか",
      example: "メールのみ → 電話対応で月額+3,000円",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative z-10">
          <div className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              料金プラン
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              月額19,800円から始められる、明確でわかりやすい料金体系
            </p>
            <p className="text-lg text-muted-foreground">
              機能やサポート内容に応じて最適なプランをお選びいただけます
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${
                  plan.recommended
                    ? "border-primary shadow-lg"
                    : ""
                } ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      おすすめ
                    </div>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <div className="text-4xl font-bold text-primary">
                      {plan.monthlyPrice}
                      {plan.monthlyPrice !== "要相談" && <span className="text-lg text-muted-foreground">/月</span>}
                    </div>
                    {plan.setupFee !== "要相談" && (
                      <div className="text-sm text-muted-foreground mt-2">
                        初期費用: {plan.setupFee}
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact">
                    <Button 
                      className={`w-full ${plan.recommended ? '' : 'variant-outline'}`}
                      variant={plan.recommended ? 'default' : 'outline'}
                    >
                      お問い合わせ
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Price Factors Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">料金が変動する要素</h2>
            <p className="text-lg text-muted-foreground">
              以下の要素により、最適な料金プランをご提案いたします
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {priceFactors.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-lg">{item.factor}</CardTitle>
                      <CardDescription className="mt-2">{item.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-primary">例: {item.example}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Options Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">追加オプション</h2>
            <p className="text-lg text-muted-foreground">
              必要な機能やサービスを自由に組み合わせられます
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {additionalOptions.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold mb-4 text-primary">{category.category}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{item.name}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-primary whitespace-nowrap">
                              {item.price}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            最適なプランをご提案します
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            お客様のビジネス規模や目的に合わせて、最適な料金プランをカスタマイズいたします。<br />
            まずはお気軽にご相談ください。
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-12 py-6 hover:scale-110 transition-all duration-300">
              無料相談を申し込む
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
