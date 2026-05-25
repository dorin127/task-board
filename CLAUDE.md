# task-board

React + Vite で構築するタスク管理ボードアプリ。

## デプロイ先

**GitHub Pages**: https://dorin127.github.io/task-board/

`main` ブランチへの push で GitHub Actions が自動ビルド＆デプロイする。

## 技術スタック

| 種別 | 技術 |
|---|---|
| UI ライブラリ | React 18 |
| ビルドツール | Vite 5 |
| 言語 | JavaScript (JSX) |
| スタイル | CSS（`src/App.css`） |
| データ永続化 | localStorage |
| パッケージ管理 | npm |
| CI / CD | GitHub Actions (`.github/workflows/deploy.yml`) |

## 開発コマンド

```bash
npm install       # 依存パッケージのインストール
npm run dev       # 開発サーバー起動 → http://localhost:5173
npm run build     # 本番ビルド（dist/ に出力）
npm run preview   # ビルド結果のプレビュー
```

## ディレクトリ構成

```
task-board/
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Pages 自動デプロイ
├── src/
│   ├── main.jsx          # React エントリーポイント
│   ├── App.jsx           # アプリ本体（ロジック・UI）
│   └── App.css           # スタイル
├── index.html
├── vite.config.js
├── package.json
└── CLAUDE.md
```

## コンポーネント命名規約

### ファイル・コンポーネント名
- コンポーネントは **PascalCase** で命名する（例: `TaskItem`, `TaskList`）
- ファイル名はコンポーネント名と一致させる（例: `TaskItem.jsx`）
- 1ファイル1コンポーネントを基本とする

### CSS クラス名
- **kebab-case** を使用する（例: `task-list`, `btn-add`, `input-row`）
- コンポーネントのルート要素にはコンポーネント名由来のクラスを付ける（例: `.app`）

### 変数・関数名
- state 変数: camelCase（例: `tasks`, `input`）
- イベントハンドラ: 動詞 + 対象の camelCase（例: `addTask`, `toggleTask`, `deleteTask`）

## コーディング規約

- インデント: スペース 2 文字
- セミコロン: なし（Vite デフォルト設定に従う）
- 文字列: シングルクォート
- state 更新: 関数形式（`prev =>` パターン）を使用する
- 副作用: `useEffect` で管理し、依存配列を必ず明示する

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
   git push origin main
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
