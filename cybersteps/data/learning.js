export const lessons = {
  basics: {
    level: 'LEVEL 0',
    category: 'SECURITY BASICS',
    title: 'まずは、<em>「守る理由」</em>から。',
    intro: 'スマホも、SNSも、Webサイトも。大切な情報を安心して使うための考え方が、サイバーセキュリティです。',
    what: 'デジタルの大切なものを、困ったことから守る工夫です。',
    why: '自分や周りの人が、安心して情報を使うためです。',
    action: '確認問題へ',
    challengeId: 1
  },
  network: {
    level: 'LEVEL 1',
    category: 'NETWORK',
    title: '情報が通る、<em>「道のり」</em>を知る。',
    intro: 'スマホやパソコンは、見えない道を通って情報をやり取りしています。その道のりをネットワークと呼びます。',
    what: '情報を届けるために、機器どうしをつなぐ仕組みです。',
    why: '安全な通信かどうかを考える土台になります。',
    action: 'NetworkのCTFへ',
    challengeId: 3
  },
  linux: {
    level: 'LEVEL 2',
    category: 'LINUX',
    title: 'コンピューターに、<em>言葉で伝える。</em>',
    intro: 'Linuxは、多くのサーバーや開発環境で使われているOSです。決まった短い命令で、コンピューターにお願いをします。',
    what: 'コンピューターを動かすための基本ソフトの一種です。',
    why: 'ファイルや仕組みを理解する力につながります。',
    action: '最初のCTFへ',
    challengeId: 1
  },
  web: {
    level: 'LEVEL 3',
    category: 'WEB',
    title: 'Webの向こう側を、<em>少しだけ見る。</em>',
    intro: 'Webサイトとサーバーは、情報をやり取りしています。そのときのルールのひとつをHTTPと呼びます。',
    what: 'ブラウザとWebサイトが情報をやり取りする仕組みです。',
    why: 'リンクやフォームを安全に使う視点が身につきます。',
    action: '通信のCTFへ',
    challengeId: 3
  },
  crypto: {
    level: 'LEVEL 4',
    category: 'CRYPTO',
    title: '秘密を守る、<em>「約束」</em>を知る。',
    intro: '暗号は、見られたくない情報を読めない形にして守るための工夫です。まずは、文字の表し方を観察するところから始めます。',
    what: '情報を読めない形にして、必要な人だけが読めるようにする技術です。',
    why: 'パスワードやWebの安全を考える基礎になります。',
    action: 'CryptoのCTFへ',
    challengeId: 1
  },
  forensics: {
    level: 'LEVEL 5',
    category: 'FORENSICS',
    title: '残された手がかりを、<em>丁寧にたどる。</em>',
    intro: 'フォレンジックは、データに残った情報を集めて状況を考える分野です。小さな違和感が、答えへの入口になります。',
    what: 'デジタル上に残った記録やファイルを調べる考え方です。',
    why: '何が起きたのかを落ち着いて確かめる力につながります。',
    action: 'ForensicsのCTFへ',
    challengeId: 2
  },
  osint: {
    level: 'LEVEL 6',
    category: 'OSINT',
    title: '公開情報を、<em>鵜呑みにしない。</em>',
    intro: 'OSINTは、公開されている情報を集めて確かめる考え方です。情報を見る目を育てることから始まります。',
    what: '公開情報を、目的に合わせて調べて整理する方法です。',
    why: '情報の出どころや信頼性を考える力が身につきます。',
    action: '最初のCTFへ',
    challengeId: 1
  },
  reverse: {
    level: 'LEVEL 7',
    category: 'REVERSE ENGINEERING',
    title: '仕組みを、<em>後ろから理解する。</em>',
    intro: 'リバースエンジニアリングは、動いているものを観察して、どう作られているかを理解していく分野です。',
    what: '完成したプログラムや機器の仕組みを調べる考え方です。',
    why: '仕組みを深く理解し、安全を考える視点になります。',
    action: '最初のCTFへ',
    challengeId: 1
  },
  pwn: {
    level: 'LEVEL 8',
    category: 'PWN',
    title: '深い仕組みを、<em>安全に学ぶ。</em>',
    intro: 'Pwnは、プログラムが動く仕組みを深く知る分野です。最初は、基本を積み重ねた先にある学びとして眺めてみましょう。',
    what: 'プログラムがメモリを使う仕組みなどを深く扱う分野です。',
    why: '安全なソフトウェアを考える高度な基礎につながります。',
    action: '最初のCTFへ',
    challengeId: 1
  }
};
