# is-string-checker [![NPM version](https://img.shields.io/npm/v/is-string-checker.svg?style=flat)](https://www.npmjs.com/package/is-string-checker)[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](<[LICENSE](https://github.com/angelabenavente/is-string-checker/LICENSE)>)

<!-- [![NPM monthly downloads](https://img.shields.io/npm/dm/is-string-checker.svg?style=flat)](https://www.npmjs.com/package/is-string-checker)
[![NPM total downloads](https://img.shields.io/npm/dt/is-string-checker.svg?style=flat)](https://www.npmjs.com/package/is-string-checker) -->

> A lightweight utility to check if a given value is a string.

<!-- `is-string-checker` is a tiny, zero-dependency library that allows you to determine whether a value is a string. It's fast, reliable, and works in all JavaScript environments. -->

---

## 🚀 Features

- **Zero dependencies**: Lightweight and easy to integrate.
- **Reliable type-checking**: Handles edge cases such as `Object.create(null)` or string objects (`new String()`).
- **Cross-platform**: Works in Node.js, browsers, and other JavaScript environments.
- **ESM and CJS support**: Fully compatible with modern module systems.

---

## 📦 Installation

You can install `is-string-checker` using your favorite package manager:

```
# Using pnpm
pnpm add is-string-checker

# Using npm
npm install is-string-checker

# Using yarn
yarn add is-string-checker
```

---

## 🌟 Usage

Here's how to use the library in your project:

### Import the library

```
// CommonJS
const isString = require('is-string-checker');

// ES Modules
import isString from 'is-string-checker';
```

### Basic example

```
console.log(isString("hello")); // true
console.log(isString(new String("hello"))); // true
console.log(isString(123)); // false
console.log(isString(null)); // false
console.log(isString(undefined)); // false
```

---

## 🔧 API

### `isString(value)`

Checks if the given `value` is a string.

#### Parameters

- **`value`** (`any`): The value to check.

#### Returns

- **`boolean`:** Returns `true` if `value` is a string; otherwise, `false`.

---

## 🛠️ Development

If you want to contribute or run the project locally, follow these steps:

### Clone the repository

```
git clone https://github.com/angelabenavente/is-string-checker.git
cd is-string-checker
```

### Install dependencies

```
npm install
```

### Run tests

```
npm run test
```

### Lint the code

```
npm run eslint
```

---

## 🧪 Testing

This project uses [Jest](https://jestjs.io/) for testing. To run the test suite, simply use:

```
npm run test
```

Example output:

```
PASS  ./isString.test.js
✓ should return true for valid strings (10 ms)
✓ should return false for non-strings
...
```

Feel free to add more test cases in the `test` file.

---

## 🔄 Changelog

See [CHANGELOG.md](https://github.com/angelabenavente/is-string-checker/CHANGELOG.md) for a detailed history of changes.

---

## 💡 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bugfix.
3.  Submit a pull request with a clear description of the changes.

See [CONTRIBUTING.md](https://github.com/angelabenavente/is-string-checker/CONTRIBUTING.md) for more details.

---

## 📜 License

This project is licensed under the [MIT License](https://github.com/angelabenavente/is-string-checker/LICENSE). Created with ❤️ by [Ángela Benavente](https://github.com/angelabenavente).

---

## 🌍 Links

- **GitHub Repository:** [https://github.com/angelabenavente/is-string-checker](https://github.com/angelabenavente/is-string-checker)
<!-- - **NPM Package:** [https://www.npmjs.com/package/is-string-checker](https://www.npmjs.com/package/is-string-checker) -->
