Install jest, typescript, ts-jest (write jest in typescript)

```javascript
npm install typescript jest ts-jest @types/jest
npm init
tsc --init
jest --init
```

Edit file jest.config.js

```javascript
module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true
};
```

Edit file package.json

```javascript
 "scripts": {
    "compile": "tsc",
    "test": "jest"
  }
```

Run

```javascript
npm run test
```
