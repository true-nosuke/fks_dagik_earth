# Dagik Earth FKS Ver

ブラウザ上で地球や惑星などを3D表示するビューアーです。球体は自動回転し、画面左下のコマンドから表示するテクスチャを切り替えられます。

**公開ページ：** [Planet Viewer](https://true-nosuke.github.io/fks_dagik_earth/)

## 機能

- 地球の3D表示と自動回転
- マウスやタッチによる視点操作（OrbitControls）
- コマンドによる天体テクスチャの切り替え
- ウィンドウサイズに合わせた表示の更新

## 使い方

1. [公開ページ](https://true-nosuke.github.io/fks_dagik_earth/)を開きます。
2. 球体をドラッグして視点を動かします。
3. 画面左下の入力欄にコマンドを入力し、Enterキーで実行します。

例：火星を表示するには、次のコマンドを入力します。

```text
planet mars
```

### コマンド一覧

| コマンド | 説明 |
| --- | --- |
| `help` | 使用できるコマンドを表示 |
| `clear` | 表示中のログを消去 |
| `echo <message>` | 指定したメッセージを表示 |
| `planet <name>` | 表示するテクスチャを切り替え |

`planet` で指定できる名前は次のとおりです。

| 名前 | 表示 |
| --- | --- |
| `earth` | 地球（初期表示） |
| `night` | 地球の夜 |
| `moon` | 月 |
| `mars` | 火星 |
| `jupiter` | 木星 |
| `mercury` | 水星（地形データ） |

コマンドやメッセージのログは、約3秒後にフェードアウトします。

## ローカルで実行

Python 3がインストールされている場合の例です。

```bash
git clone https://github.com/true-nosuke/fks_dagik_earth.git
cd fks_dagik_earth
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000/` を開きます。Three.jsはCDNから読み込むため、インターネット接続が必要です。

## 使用技術

- HTML / CSS / JavaScript（ES Modules）
- [Three.js](https://threejs.org/) 0.179.1
- Three.js OrbitControls

## ファイル構成

```text
.
├── index.html      # 画面とモジュールの読み込み
├── main.js         # 3D表示、視点操作、テクスチャ切り替え
├── cli.js          # コマンド入力とログ表示
├── cmd/            # 各コマンドの実装
├── style.css       # 画面とログのスタイル
└── textures/       # 天体のテクスチャ画像
```

## 既知の注意点

未対応の天体名を指定すると、エラーの前に「惑星の変更に成功しました」と表示されます。エラーが表示された場合、テクスチャは切り替わりません。
