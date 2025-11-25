import { Zap, Target, Users, Award } from "lucide-react";

export default function StrengthsSection() {
  const features = [
    {
      number: "1",
      icon: <Zap className="w-12 h-12" />,
      title: "デザイン力",
      description: "ユーザー体験を重視した美しいデザインで、訪問者の心を掴みます。",
    },
    {
      number: "2",
      icon: <Target className="w-12 h-12" />,
      title: "技術力",
      description: "最新技術を活用した高品質な開発で、安定したサイト運営を実現します。",
    },
    {
      number: "3",
      icon: <Users className="w-12 h-12" />,
      title: "柔軟性",
      description: "お客様のニーズに合わせたカスタマイズ対応で、理想のサイトを実現します。",
    },
    {
      number: "4",
      icon: <Award className="w-12 h-12" />,
      title: "サポート",
      description: "公開後も安心の運用サポートで、長期的なパートナーシップを築きます。",
    },
  ];

  return (
    <section className="py-20 bg-muted/50 relative">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">選ばれる理由</h2>
          <p className="text-lg text-muted-foreground">
            On Libertyが多くのお客様に選ばれる4つの理由
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative inline-block mb-6 perspective-1000">
                {/* 背景の数字 - 3D効果 */}
                <div className="absolute -top-4 -left-4 text-8xl font-bold text-primary/10 group-hover:text-primary/20 group-hover:scale-110 transition-all duration-500 group-hover:rotate-12">
                  {feature.number}
                </div>
                {/* アイコン - 3D回転 */}
                <div className="relative w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-y-180 transform-style-3d shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/50">
                  <div className="group-hover:rotate-y-180">
                    {feature.icon}
                  </div>
                </div>
                {/* 光のエフェクト */}
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping-slow"></div>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

