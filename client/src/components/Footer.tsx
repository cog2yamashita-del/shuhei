import { Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">On Liberty株式会社</h3>
            <p className="text-sm text-muted-foreground">
              自由な発想で、ビジネスに新しい価値を創造するWEBSITE制作会社です。
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">サービス</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#corporate" className="text-muted-foreground hover:text-primary transition-colors">
                  コーポレートサイト制作
                </Link>
              </li>
              <li>
                <Link href="/services#ec" className="text-muted-foreground hover:text-primary transition-colors">
                  ECサイト構築
                </Link>
              </li>
              <li>
                <Link href="/services#lp" className="text-muted-foreground hover:text-primary transition-colors">
                  ランディングページ制作
                </Link>
              </li>
              <li>
                <Link href="/services#system" className="text-muted-foreground hover:text-primary transition-colors">
                  ウェブシステム開発
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">会社情報</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  会社概要
                </Link>
              </li>

              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  料金プラン
                </Link>
              </li>
              <li>
                <Link href="/moto-liberty" className="text-muted-foreground hover:text-primary transition-colors">
                  二輪業界特化
                </Link>
              </li>
              <li>
                <Link href="/recruit" className="text-muted-foreground hover:text-primary transition-colors">
                  採用情報
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">お問い合わせ</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  〒630-8283<br />
                  奈良県奈良市油留木町33-1
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:on.liberty.jp@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  on.liberty.jp@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} On Liberty株式会社. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

