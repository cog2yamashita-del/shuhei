# Vercelデプロイ完全ガイド

このドキュメントは、On Liberty株式会社のコーポレートサイトをVercelにデプロイするための手順書です。

---

## 📋 重要な設定情報

このプロジェクトは**シングルリポジトリ構造**です。以下の設定が正しいです：

| 項目 | 設定値 |
|------|--------|
| **Framework Preset** | Vite |
| **Build Command** | `pnpm run build` |
| **Output Directory** | `dist/public` |
| **Install Command** | `pnpm install` |

**注意**: `dist/client` ではなく、`dist/public` です。

---

## 🚀 デプロイ手順

### ステップ1: GitHubにプッシュ

```bash
# プロジェクトディレクトリに移動
cd on-liberty-corporate

# Gitリポジトリを初期化（まだの場合）
git init

# すべてのファイルをステージング
git add .

# コミット
git commit -m "Initial commit: On Liberty Corporate Website"

# GitHubリポジトリをリモートとして追加
git remote add origin https://github.com/cog2yamashita-del/on-liberty-corporate.git

# メインブランチにプッシュ
git branch -M main
git push -u origin main
```

---

### ステップ2: Vercelでプロジェクトをインポート

1. **Vercelにログイン**
   - https://vercel.com にアクセス
   - GitHubアカウントでログイン

2. **新しいプロジェクトを作成**
   - 「Add New...」→「Project」をクリック
   - `cog2yamashita-del/on-liberty-corporate` を探す
   - 「Import」をクリック

3. **プロジェクト設定**
   - **Project Name**: `on-liberty-corporate`
   - **Framework Preset**: Vite
   - **Root Directory**: `./`（デフォルト）

4. **ビルド設定（重要）**
   - 「Build and Output Settings」を展開
   - 「Override」をONにする
   - 以下を入力：
     ```
     Build Command: pnpm run build
     Output Directory: dist/public
     Install Command: pnpm install
     ```

5. **「Deploy」ボタンをクリック**

---

### ステップ3: デプロイ完了を確認

1. ビルドログが表示される（2〜5分かかる）
2. 「Congratulations!」と表示されたら成功
3. 「Visit」ボタンをクリックしてサイトを確認

---

### ステップ4: カスタムドメインを設定

1. **Vercelプロジェクトダッシュボードで「Settings」→「Domains」をクリック**

2. **ドメインを追加**
   - `onliberty.website` を入力
   - 「Add」をクリック

3. **DNS設定を確認**
   - Vercelで購入したドメインの場合: 自動設定
   - 他のプロバイダーの場合: 表示されるDNS設定をメモして、プロバイダーの管理画面で設定

4. **DNS伝播を待つ**（数分〜48時間）

5. **`onliberty.website` をブラウザで開いて確認**

---

## 🔧 トラブルシューティング

### 問題1: ビルドエラー「Command exited with 1」

**原因**: ビルド設定が間違っている

**解決策**:
1. Vercelの「Settings」→「General」→「Build & Development Settings」
2. 「Override」をONにする
3. **Build Command**: `pnpm run build`
4. **Output Directory**: `dist/public`
5. 「Save」→「Redeploy」

---

### 問題2: 404エラー

**原因**: Output Directoryが間違っている

**解決策**:
1. **Output Directory** が `dist/public` になっているか確認
2. `vercel.json` の `outputDirectory` が `dist/public` になっているか確認

---

### 問題3: Expressサーバーのコードが表示される

**原因**: `.vercelignore` が正しく設定されていない

**解決策**:
1. `.vercelignore` ファイルが存在するか確認
2. `server/` が含まれているか確認

---

## ✅ チェックリスト

- ✅ `vercel.json` ファイルが存在する
- ✅ `.vercelignore` ファイルが存在する
- ✅ GitHubにプッシュ済み
- ✅ Vercelでインポート済み
- ✅ ビルド設定が正しい（Output Directory: `dist/public`）
- ✅ デプロイ成功
- ✅ サイトが正常に表示される

---

## 📞 サポート

### Vercelサポート
- ドキュメント: https://vercel.com/docs
- サポート: https://vercel.com/support

---

**最終更新日**: 2025年3月20日
