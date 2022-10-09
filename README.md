# execute jest test

```bash
$ npx jest
```

- install 時に `-g` をつければ jest コマンドが使えるようになるっぽい

```bash
$ npm install -g jest
```

- typescript と合わせて使う場合は

```bash
$ npm install ts-jest @types/jest --save
```

## 個別にテストを実行する

```bash
$ npx jest sample.spec.ts
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
$ npx ts-node app.ts
```

**index.html**

動きません。ごめんなさい (´・ω・｀)

# bib

* [Jestでテストを書こう - サバイバルTypeScript](https://typescriptbook.jp/tutorials/jest)
