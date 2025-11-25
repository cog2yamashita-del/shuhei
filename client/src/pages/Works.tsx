import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart, Code, Laptop, Rocket } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function Works() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const works = [
    {
      title: "製造業A社 コーポレートサイト",
      category: "コーポレートサイト",
      tags: ["WordPress", "レスポンシブ", "SEO対策"],
      description: "企業ブランディングを重視したコーポレートサイト制作。製品情報や企業理念を効果的に伝えるデザインで、信頼感を醸成しました。",
      challenge: "老舗企業としての信頼感を保ちながら、モダンで親しみやすいイメージを表現する必要がありました。",
      solution: "伝統と革新を融合させたデザインコンセプトを採用。クラシックな配色とモダンなレイアウトを組み合わせることで、両立を実現しました。",
      result: "問い合わせ数が前年比150%増加",
      tech: ["HTML5", "CSS3", "JavaScript", "WordPress"],
      icon: <Laptop className="w-8 h-8" />,
    },
    {
      title: "小売業B社 ECサイト",
      category: "ECサイト",
      tags: ["Shopify", "決済連携", "在庫管理"],
      description: "商品数500点以上を扱うECサイト構築。直感的な商品検索機能と、スムーズな購入フローで、ユーザー体験を最適化しました。",
      challenge: "大量の商品を扱いながら、ユーザーが目的の商品を素早く見つけられるようにする必要がありました。",
      solution: "高度な検索・フィルタリング機能を実装。カテゴリ、価格帯、人気度など、多様な条件で絞り込みが可能になりました。",
      result: "オンライン売上が月間200万円を達成",
      tech: ["Shopify", "カスタムテーマ開発", "API連携"],
      icon: <Code className="w-8 h-8" />,
    },
    {
      title: "サービス業C社 ランディングページ",
      category: "ランディングページ",
      tags: ["LP", "広告連携", "A/Bテスト"],
      description: "新サービスのプロモーション用LP制作。コンバージョン率を最大化するため、ユーザー心理に基づいた導線設計を行いました。",
      challenge: "競合が多い市場で、短時間でサービスの魅力を伝え、申し込みまで誘導する必要がありました。",
      solution: "ファーストビューで明確なベネフィットを提示し、段階的に詳細情報を展開。CTAボタンの配置とデザインを最適化しました。",
      result: "CVRが3.5%から8.2%に向上",
      tech: ["HTML5", "CSS3", "JavaScript", "Google Analytics"],
      icon: <Rocket className="w-8 h-8" />,
    },
    {
      title: "IT企業D社 ウェブシステム",
      category: "ウェブシステム",
      tags: ["React", "Node.js", "PostgreSQL"],
      description: "顧客管理・営業支援システムの開発。営業活動の可視化と効率化を実現し、売上向上に貢献しました。",
      challenge: "複雑な営業プロセスをシステム化し、誰でも使いやすいインターフェースを提供する必要がありました。",
      solution: "直感的なダッシュボードと、ドラッグ&ドロップで操作できるカンバン方式を採用。営業活動の進捗を一目で把握できるようにしました。",
      result: "業務効率が40%改善",
      tech: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      icon: <BarChart className="w-8 h-8" />,
    },
  ];

  const categories = ["すべて", "コーポレートサイト", "ECサイト", "ランディングページ", "ウェブシステム"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>制作実績</h1>
            <p className={`text-lg text-muted-foreground transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              これまでに手がけた代表的なプロジェクトをご紹介します。
              お客様のビジネス課題を解決し、成果を上げてきた実績をご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "すべて" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-16">
            {works.map((work, index) => (
              <Card key={index} className={`overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${400 + index * 150}ms` }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto bg-muted flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                        {work.icon}
                      </div>
                      <p className="text-muted-foreground font-medium">{work.category}</p>
                    </div>
                  </div>
                  <div>
                    <CardHeader>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {work.tags.map((tag, idx) => (
                          <Badge key={idx} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-2xl mb-2">{work.title}</CardTitle>
                      <CardDescription className="text-base">
                        {work.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm text-muted-foreground">課題</h4>
                        <p className="text-sm">{work.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm text-muted-foreground">解決策</h4>
                        <p className="text-sm">{work.solution}</p>
                      </div>
                      <div className="bg-accent/20 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 text-sm">成果</h4>
                        <p className="font-medium text-accent-foreground">{work.result}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm text-muted-foreground">使用技術</h4>
                        <div className="flex flex-wrap gap-2">
                          {work.tech.map((tech, idx) => (
                            <Badge key={idx} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">プロジェクト実績</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">顧客満足度</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2.5x</div>
              <p className="text-muted-foreground">平均コンバージョン向上率</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">サポート体制</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                あなたのプロジェクトも成功させませんか?
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                お客様のビジネス課題をお聞かせください。最適なソリューションをご提案いたします。
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  お問い合わせ
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

