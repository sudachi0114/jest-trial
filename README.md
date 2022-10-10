# execute jest test

```bash
$ npx jest
```

- install 時に `-g` をつければ jest コマンドが使えるようになるっぽい

```bash
$ npm install -g jest
$ jest
```

- typescript と合わせて使う場合は

```bash
$ npm install ts-jest @types/jest --save
```

## 個別にテストを実行する

```bash
$ npx jest single-samples/sample.spec.ts
 PASS  ./sample.spec.ts
  足し算
    ✓ 1+3 は 4 (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.902 s, estimated 1 s
Ran all test suites matching /sample.spec.ts/i.
```

# execute app.ts (Node.js)

```bash
$ npx ts-node src/app.ts
```

**index.html**

動きません。ごめんなさい (´・ω・｀)

# bib
* [Jestでテストを書こう！ - bitbank techblog](https://tech.bitbank.cc/lets-test-by-jest/)
    - `single-samples`：ここで扱った内容で、単体で動くもの
        - `sample.spec.ts`：ほぼ動作確認
        - `skip.spec.ts`：テストケースだけ先に書いて、実行はスキップしたいやつ ( `it.skip()` )
    - `(before|after)(All|Each)` で扱った内容：`beforeAndAfter`
* [Jestでテストを書こう - サバイバルTypeScript](https://typescriptbook.jp/tutorials/jest)
    - ここで扱った内容は主に `src/` ディレクトリ下にある
