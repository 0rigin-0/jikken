export const challenges = [
  {
    id: 1,
    title: 'Base64を解読せよ',
    category: 'Crypto',
    difficulty: 1,
    difficultyLabel: '初心者',
    description: 'これは、文字を別の文字の並びに置き換える方法のひとつで表されたメッセージです。次の文字列をBase64として読み解いて、Flagを見つけてください。',
    clue: 'RkxBR3tkZWNvZGVfdGhlX21lc3NhZ2V9',
    hint: 'Base64は、英字・数字・記号を使ってデータを表す方法です。「Base64 デコード」と検索すると、文字列を元に戻せるツールが見つかります。',
    answer: 'FLAG{decode_the_message}',
    explanation: 'この文字列はBase64でエンコードされています。Base64は暗号そのものではありませんが、データを文字列として扱いやすくするためによく使われます。',
    takeaway: '読めない文字列を見つけたら、まず「どんな表し方か」を観察してみよう。',
    tools: 'CyberChef / Base64 Decoder',
    knowledge: 'Base64は暗号ではなく、データを文字列で表すエンコード方法です。'
  },
  {
    id: 2,
    title: '隠されたファイルを探せ',
    category: 'Forensics',
    difficulty: 1,
    difficultyLabel: '初心者',
    description: '調査用フォルダの一覧です。見た目だけでは気づきにくいファイルに、調査メモが残されています。手がかりを見つけてFlagを答えてください。',
    clue: 'report.pdf\nimage_01.png\n.field_notes  ← 調査メモ\nreadme.txt\n\n.field_notes の内容: FLAG{hidden_is_a_clue}',
    hint: 'ファイル名の先頭に付いている記号に注目。Linuxなどでは、ある記号から始まるファイルを普段の一覧で表示しないことがあります。',
    answer: 'FLAG{hidden_is_a_clue}',
    explanation: '先頭が「.」のファイルは、Linuxなどで隠しファイルとして扱われます。フォレンジックでは、普段は見えにくい場所にも手がかりがないかを確かめます。',
    takeaway: '「見えていない」ことと「存在しない」ことは同じではありません。',
    tools: 'Linuxコマンド ls -a / file',
    knowledge: '先頭が . のファイルは、Linuxなどで隠しファイルとして扱われます。'
  },
  {
    id: 3,
    title: '怪しい通信を見つけろ',
    category: 'Network',
    difficulty: 2,
    difficultyLabel: '初級',
    description: '次は、架空の学習アプリで記録された通信ログです。ほかと違う点を見つけ、Flagを答えてください。これは安全な疑似ログです。',
    clue: '09:00  https://learn.example.jp/start\n09:01  https://learn.example.jp/lesson/1\n09:02  http://unknown.example.net/collect\n09:03  https://learn.example.jp/check',
    hint: 'Webサイトのアドレスの先頭には、通信のルールを示す部分があります。ほかの行と比べてみましょう。',
    answer: 'FLAG{http_not_https}',
    explanation: 'ほかの行はHTTPSですが、1行だけHTTPです。HTTPSは、Webサイトとブラウザの間の通信を暗号化して守るための仕組みです。',
    takeaway: 'リンクを開く前に、アドレスと通信の種類を見る習慣をつけよう。',
    tools: 'ログ比較 / URLの観察',
    knowledge: 'HTTPSはブラウザとWebサイトの間の通信を暗号化します。'
  }
];
