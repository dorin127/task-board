# task-board

Node.js / Express で構築するタスク管理ボードアプリ。

## 技術スタック

- **バックエンド**: Node.js / Express
- **パッケージ管理**: npm

## 開発コマンド

```bash
npm install       # 依存パッケージのインストール
npm start         # サーバー起動
npm run dev       # 開発サーバー起動（ホットリロード）
npm test          # テスト実行
```

## Git 運用ルール

**コードを変更するたびに GitHub へプッシュすること。**

### 手順

1. 変更をステージング・コミット
   ```bash
   git add <変更したファイル>
   git commit -m "コミットメッセージ"
   ```

2. GitHub へプッシュ
   ```bash
   git push origin <ブランチ名>
   ```

### コミットメッセージの書き方

- `feat: ` — 新機能の追加
- `fix: ` — バグ修正
- `refactor: ` — リファクタリング
- `docs: ` — ドキュメント変更
- `test: ` — テスト追加・修正
- `chore: ` — ビルド設定・依存関係の更新

例:
```
feat: タスクの完了フラグ切り替え機能を追加
fix: タスク削除後にリストが更新されないバグを修正
```

### ブランチ戦略

- `main` — 本番用。直接コミット禁止。
- `develop` — 開発用のベースブランチ。
- `feature/<機能名>` — 各機能の開発ブランチ。

機能開発は `feature/` ブランチで行い、完了後に `develop` へPRを出す。

## コーディング規約

- インデント: スペース 2 文字
- セミコロン: あり
- 文字列: シングルクォート
- 非同期処理: `async/await` を優先
- エラーハンドリング: Express のミドルウェアで一元管理

## ディレクトリ構成（想定）

```
task-board/
├── src/
│   ├── routes/       # ルーティング
│   ├── controllers/  # コントローラー
│   ├── models/       # データモデル
│   └── middleware/   # ミドルウェア
├── public/           # 静的ファイル
├── tests/            # テスト
├── package.json
└── CLAUDE.md
```
