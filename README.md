# 犬派・猫派 性格診断アプリ

React と Vite で作成された、シンプルな性格診断アプリケーションです。5 つの質問に答えることで、あなたが「犬派」か「猫派」かを診断します。

## 機能

- **診断フロー**: 5 問の質問に「はい/いいえ」形式（または 2 択）で回答
- **結果表示**: 診断結果に応じたキャラクター（絵文字）と説明文を表示
- **SNS シェア**: 結果を Twitter や Facebook でシェア可能
- **プレミアムデザイン**: ダークモード、グラデーション、アニメーションを取り入れたモダンな UI

## 技術スタック

- **フレームワーク**: React (Vite)
- **UI ライブラリ**: Material UI (@mui/material, @emotion/react, @emotion/styled)
- **アイコン**: Material Icons (@mui/icons-material)
- **ルーティング**: React Router (react-router-dom)
- **デプロイ**: Vercel
- **CSS**: グローバル CSS, MUI テーマ
- **設問データ管理**: JavaScript モジュール
- **診断ロジック**: カスタムフック（useDiagnosis）

## ローカルでの実行方法

1. リポジトリをクローンします

   ```bash
   git clone <repository-url>
   cd dog-cat-diagnosis
   ```

2. 依存関係をインストールします

   ```bash
   npm install
   ```

3. 開発サーバーを起動します

   ```bash
   npm run dev
   ```

4. ブラウザで `http://localhost:5173` を開きます

## デプロイ方法 (Vercel)

1. GitHub にリポジトリをプッシュします
2. Vercel のダッシュボードから "New Project" を選択します
3. GitHub リポジトリをインポートします
4. 設定はそのままで "Deploy" をクリックします
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

## Vercel でのデプロイ・ビルド方法

1. [Vercel](https://vercel.com/) にアクセスし、アカウントを作成またはログインします。
2. GitHub（または GitLab/Bitbucket）と連携し、リポジトリをインポートします。
3. プロジェクト作成画面で、フレームワーク自動検出（Vite/React）を確認し、そのまま「Deploy」をクリックします。
4. 数分でビルド＆デプロイが完了し、公開 URL が発行されます。

### コマンドラインからデプロイする場合

1. Vercel CLI をインストール
   ```bash
   npm install -g vercel
   ```
2. プロジェクトディレクトリで初期化
   ```bash
   vercel
   ```
   （指示に従い、プロジェクト名や公開設定を選択）
3. 以降は `vercel --prod` で本番デプロイ可能

### 補足

- `vercel.json`があれば自動で設定が反映されます。
- GitHub に push するだけで自動的に再デプロイされます。

## ライセンス

MIT
