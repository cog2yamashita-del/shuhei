import { Building2, Mail, MapPin, Target } from "lucide-react";
import { useState, useEffect } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const companyInfo = [
    { label: "会社名", value: "On Liberty株式会社" },
    { label: "設立", value: "2024年4月" },
    { label: "所在地", value: "〒630-8283 奈良県奈良市油留木町33-1" },
    { label: "アクセス", value: "近鉄奈良駅より徒歩8分" },
    { label: "メールアドレス", value: "on.liberty.jp@gmail.com" },
    { label: "事業内容", value: "ウェブサイト制作、ウェブシステム開発、ウェブコンサルティング" },
  ];

  const philosophy = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission",
      subtitle: "使命",
      description: "お客様のビジネスに新しい価値を創造する",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Vision",
      subtitle: "ビジョン",
      description: "すべての企業にとって最適なウェブソリューションを提供する",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Value",
      subtitle: "価値観",
      description: "誠実、革新、品質",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/50 overflow-hidden">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              会社概要
            </h1>
            <p className={`text-lg text-muted-foreground transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              On Liberty株式会社は、「自由」という名の通り、既成概念にとらわれない柔軟な発想で、
              お客様のビジネス課題を解決します。私たちは、単なるウェブサイト制作会社ではなく、
              お客様のビジネスパートナーとして、共に成長していくことを目指しています。
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            企業理念
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <div
                key={index}
                className={`text-center p-8 rounded-lg border bg-card hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 hover:scale-110 hover:rotate-12 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.subtitle}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            会社情報
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-lg border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              {companyInfo.map((info, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row border-b last:border-b-0 hover:bg-muted/50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="md:w-1/3 p-6 font-semibold bg-muted/30">
                    {info.label}
                  </div>
                  <div className="md:w-2/3 p-6">{info.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-20">
        <div className="container">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            代表メッセージ
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className={`bg-card rounded-lg border p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1200ms' }}>
              <p className="text-lg leading-relaxed mb-6">
                インターネットの普及により、ビジネスの在り方は大きく変化しました。
                しかし、その本質は変わりません。お客様に価値を提供し、信頼関係を築くこと。
                それが、私たちOn Libertyの使命です。
              </p>
              <p className="text-lg leading-relaxed mb-6">
                私たちは、最新の技術と創造的なアイデアを組み合わせ、
                お客様のビジネスに真に役立つウェブサイトを制作します。
                単なる「きれいなサイト」ではなく、「成果を生み出すサイト」を。
              </p>
              <p className="text-lg leading-relaxed mb-8">
                お客様のビジネスの成功が、私たちの成功です。
                共に成長し、共に未来を創造していきましょう。
              </p>
              <div className="text-right">
                <p className="font-semibold text-lg">On Liberty株式会社</p>
                <p className="text-muted-foreground">代表取締役</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Map Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            アクセス
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className={`bg-card rounded-lg border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '1400ms' }}>
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-primary animate-bounce" />
                  <p className="text-xl font-semibold mb-2">〒630-8283</p>
                  <p className="text-muted-foreground">奈良県奈良市油留木町33-1</p>
                  <p className="text-sm text-muted-foreground mt-4">近鉄奈良駅より徒歩8分</p>
                </div>
              </div>
              <div className="p-6 bg-muted/30">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold mb-1">お問い合わせ</p>
                    <a href="mailto:on.liberty.jp@gmail.com" className="text-primary hover:underline">
                      on.liberty.jp@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

