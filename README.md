# oishii-bot

## なにこれ

Misskey で動く日本語Botです。

TLから言葉を学び、それをおいしいかまずいか決めて、投稿するBotです。

## 使い方

### Misskey で @oishiibot を作る

この ID じゃないと動きません

### Node.js, npm, PostgreSQL をインストールする

Node.js のバージョンは v16 以上にしてください

OS によってインストール方法が異なるので、各自調べてください

### MeCab をインストールする

aptなどのパッケージインストーラーからインストールするか、自分でビルドしてください

### `example.json5` をコピーして `config.json5` を作る

```shell
cp example.json5 config.json5
```

### `config.json5` を[下にある](#config.json)ように編集する

```shell
vi config.json5
# OR
emacs config.json5
# OR
nano config.json5
# ...etc
```

### ビルドする

```shell
npm i
npm run build
```

### Table を作る

```shell
npm run migration
```

### 終わり

```shell
npm start
```

## config.json5

```json5
{
    // MisskeyのURL
    url: 'https://misskey.io',
    // 多分アクセストークンでも行ける（未検証）
    // アクセストークンでやる場合は、すべての権限をオンにしたほうが楽かも
    apiKey: '',
    // 大文字のところを書き換える
    databaseUrl: 'postgresql://USER:PASSWORD@HOST:PORT/DATABASE',
    // DBのSSL
    dbSSL: false,
    // オーナーのUsername オーナーのみが使えるコマンドを使う人を配列で指定する
    ownerUsernames: ['kabo'],
    post: {
        // 何分毎に投稿するか
        autoPostInterval: 60,
        // TLに(フォロー / 3)数流れてきたときに食べ物を言う確率
        tlPostProbability: 0.4,
        // レートリミットの解除秒数
        rateLimitSec: 60,
        // レートリミットの最大数
        rateLimitPost: 5,
    },
    mecab: {
        // mecabのインストールパス (`which mecab`)
        binPath: '/usr/bin/mecab',
        // mecabの辞書ファイル
        dicPath: '',
    },
}
```

## NG Words

Xeltica さんの Citrine から参考にさせていただきました。

<https://github.com/Xeltica/Citrine/blob/master/Resources/ngwords.txt>

## ばすきー用フォーク仕様

- `/info` コマンドで`package.json`のバージョンを出力するようにしました。
- NGワードを追加しました。
- リバーシのノートに`#oishiiReversi`のハッシュタグをつけるようにしました。
- [pm2](https://pm2.keymetrics.io/)で起動できるようにしました。別途`npm -g install pm2`が必要です。
- リアクションする絵文字にばすきーのカスタム絵文字を追加しました。
- 覚えた単語がカスタム絵文字の一部の場合、カスタム絵文字に変換して出力するようにしました。
- 「食べられない」でもまずい判定をするようにしました。
- リモートから覚えなくなりました。