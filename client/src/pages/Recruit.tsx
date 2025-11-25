import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Clock, Code, Home, Laptop, TrendingUp, Users } from "lucide-react";
import { Link } from "wouter";

export default function Recruit() {
  const positions = [
    {
      title: "Webデザイナー",
      type: "正社員 / 業務委託",
      description: "ウェブサイトのデザイン、UI/UX設計を担当していただきます。",
      requirements: [
        "Photoshop, Illustrator, Figma等の使用経験",
        "ウェブデザインの実務経験1年以上",
        "レスポンシブデザインの理解",
      ],
      preferred: [
        "HTML/CSS, JavaScriptの知識",
        "UI/UXデザインの経験",
        "ポートフォリオをお持ちの方",
      ],
      icon: <Laptop className="w-8 h-8" />,
    },
    {
      title: "フロントエンドエンジニア",
      type: "正社員 / 業務委託",
      description: "ウェブサイトのフロントエンド開発を担当していただきます。",
      requirements: [
        "HTML, CSS, JavaScriptの実務経験",
        "React, Vue.js等のフレームワーク経験",
        "レスポンシブデザインの実装経験",
      ],
      preferred: [
        "TypeScriptの使用経験",
        "Next.js, Nuxt.js等の経験",
        "Gitを使った開発経験",
      ],
      icon: <Code className="w-8 h-8" />,
    },
    {
      title: "バックエンドエンジニア",
      type: "正社員 / 業務委託",
      description: "サーバーサイド開発、API開発を担当していただきます。",
      requirements: [
        "PHP, Python, Node.js等のいずれかの実務経験",
        "データベース設計・開発経験",
        "RESTful APIの設計・開発経験",
      ],
      preferred: [
        "クラウド(AWS, GCP等)の使用経験",
        "Docker, Kubernetesの経験",
        "セキュリティに関する知識",
      ],
      icon: <Code className="w-8 h-8" />,
    },
  ];

  const benefits = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "リモートワーク可能",
      description: "フルリモート勤務も可能です。ライフスタイルに合わせた働き方ができます。",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "フレックスタイム制",
      description: "コアタイムなしのフレックス制。自分のペースで働けます。",
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "最新の開発環境",
      description: "最新のMacやディスプレイなど、快適な開発環境を提供します。",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "スキルアップ支援",
      description: "書籍購入費補助、セミナー参加費補助など、学習を支援します。",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "少数精鋭チーム",
      description: "少人数のチームで、一人ひとりの意見が反映されやすい環境です。",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "技術選定の自由度",
      description: "プロジェクトに最適な技術を、チームで選定できます。",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">採用情報</h1>
            <p className="text-lg text-muted-foreground">
              On Libertyでは、共に成長し、新しい価値を創造できる仲間を募集しています。
              自由な発想で、ビジネスに革新をもたらしませんか?
            </p>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl text-center mb-4">
                  一緒に働きませんか?
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  On Liberty株式会社は、2024年4月に設立された新しい会社です。
                  だからこそ、既成概念にとらわれず、自由な発想で新しいことに挑戦できる環境があります。
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  私たちは、お客様のビジネス課題を解決するために、最新の技術とデザインを駆使して、
                  高品質なウェブサイトやシステムを提供しています。
                  少数精鋭のチームだからこそ、一人ひとりの意見が尊重され、
                  自分のアイデアを形にできる機会が豊富にあります。
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  リモートワークやフレックスタイム制など、柔軟な働き方を推奨しており、
                  ワークライフバランスを大切にしながら、スキルアップできる環境を整えています。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">働く環境</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              On Libertyで働く魅力をご紹介します
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Positions Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">募集職種</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              現在募集中のポジションをご紹介します
            </p>
          </div>
          <div className="space-y-8 max-w-5xl mx-auto">
            {positions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      {position.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                      <div className="text-sm text-muted-foreground mb-3">{position.type}</div>
                      <CardDescription className="text-base">
                        {position.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">必須スキル</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">歓迎スキル</h4>
                    <ul className="space-y-2">
                      {position.preferred.map((pref, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{pref}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <Link href="/contact">
                      <Button>
                        応募する
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl text-center mb-4">応募方法</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">応募書類</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>履歴書(写真付き)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>職務経歴書</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>ポートフォリオ(デザイナー・エンジニアの方)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">応募先</h4>
                  <p className="text-muted-foreground mb-2">
                    下記メールアドレスまで、応募書類をお送りください。
                  </p>
                  <a
                    href="mailto:on.liberty.jp@gmail.com"
                    className="text-primary hover:underline text-lg font-medium"
                  >
                    on.liberty.jp@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">選考プロセス</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0">
                        1
                      </div>
                      <span className="text-muted-foreground">書類選考</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0">
                        2
                      </div>
                      <span className="text-muted-foreground">一次面接(オンライン可)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0">
                        3
                      </div>
                      <span className="text-muted-foreground">最終面接</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0">
                        4
                      </div>
                      <span className="text-muted-foreground">内定</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            まずはカジュアル面談から
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            応募前に、まずは気軽にお話ししませんか?
            オンラインでのカジュアル面談も受け付けています。
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              お問い合わせ
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

