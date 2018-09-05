first

```javascript
npm install typescript jest ts-jest @types/jest
npm init
tsc --init
jest --init
```

in file jest.config.js

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

in file package.json

```javascript
 "scripts": {
    "compile": "tsc",
    "test": "jest"
  }
```
