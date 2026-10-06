# 実装ToDo

- [x] **初心者が最初の1問へ進めるトップ体験を提供する。** ヒーローに「見て、知って、解いてみる。」「サイバーセキュリティを、『知っている』から『解ける』へ。」、CTA「まずは1問解いてみる」「サイバーセキュリティを知る」を置く。高校生・専門学校生・大学生・IT初心者・サイバーセキュリティ初心者・CTF未経験者を想定し、「専門知識が必要？」「プログラミングできないと無理？」「CTFってそもそも何？」をカードで示し、「大丈夫。まずは簡単な問題から。」へつなぐ。
- [x] **見る→知る→解く→挑戦する導線を統一する。** 「知る」「解く」「挑戦する」の3 STEPを視覚的につなげ、「CTFって何？」を「謎解き × サイバーセキュリティ」として短く説明する。各表示で次の行動がわかり、学習→確認問題→CTF→次の問題の導線を持つ。
- [x] **安全な初心者向けCTF問題を3問実装する。** 「Base64を解読せよ / Crypto / ★☆☆☆☆」「隠されたファイルを探せ / Forensics / ★☆☆☆☆」「怪しい通信を見つけろ / Network / ★★☆☆☆」を表示する。問題画面には番号、タイトル、カテゴリ、難易度、問題文、HINT、Flag入力欄、Submitを含める。ヒントは答えでなく思考を助ける情報とする。
- [x] **JavaScriptだけでFlagを判定する。** 正解時は「CORRECT!」、チェックマーク、軽い演出、ANSWER / EXPLANATION、次の問題へのボタンを表示する。不正解時は「INCORRECT」と「もう一度考えてみよう。」を表示する。バックエンド、ログイン、会員登録、個人情報、データベース、追跡、実システムへの攻撃機能、意図的な脆弱性は実装しない。
- [x] **学習ロードマップとカテゴリ学習を用意する。** Security Basics、Network、Linux、Web、Crypto、Forensics、OSINT、Reverse Engineering、Pwnをカードとして表示し、カテゴリの学習表示へ進める。学習は「これは何？」「なぜ重要？」「初心者向け解説」「具体例」「確認問題」「CTF問題」の順とし、簡単な説明を先に、正式名称を後に示す。
- [x] **ゲーム連携と防衛省・自衛隊の紹介を設計する。** Forensics、Network、Crypto、OSINT、Web等の「もっと知る」から該当学習へ進める構造を持つ。防衛省・自衛隊のページ相当の専用セクションは勧誘ではなく、公式情報を根拠にサイバー分野の取り組みを知る内容にする。コンテスト・CTF・イベントなどへ外部リンクを設置できる構造を用意する。
- [x] **Cyber × Education × Defenseの統一UIを実装する。** Dark Green、Sage Green、Black、Off White、Goldを抑制したアクセントで用い、近未来的・知的・信頼感・清潔感・少しミリタリー・教育的・高級感を両立する。Matrix風、黒背景に大量の緑文字、過剰なHACKER感、赤の多用、兵器風、ターミナル主体、情報過多、長い文字だけのページ、派手すぎるアニメーション、意味のない3Dは避ける。
- [x] **共通コンポーネントとレスポンシブUIを実装する。** Header、Footer、Button、Card、Badge、ChallengeCard、DifficultyBadge、ProgressBar、HintBox、AnswerInput、Modal相当を統一する。ヘッダーにLOGO、HOME、はじめてのCTF、LEARN、CHALLENGE、ABOUT、防衛省・自衛隊、CHALLENGE NOW →を置き、スマートフォンはハンバーガーメニューにする。Desktop、Laptop、Tablet、Smartphoneで押しやすく、読めて、横スクロールせず問題を解ける。
- [x] **問題データと静的公開仕様を整備する。** 問題はid、title、category、difficulty、description、hint、answer、explanation等を含むコードから分離した配列として管理し、後から追加・変更しやすくする。title、meta description、OGP、favicon、semantic HTML、alt属性、heading hierarchy、`manus-routes.json`を整え、GitHub Pages、Cloudflare Pages、Vercel等でデプロイ可能な静的ビルドにする。
