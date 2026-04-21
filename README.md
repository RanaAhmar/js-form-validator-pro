# JS Form Validator Pro 🛡️

![JS Size](https://img.shields.io/badge/Size-3KB_Gzipped-brightgreen?style=flat-square)
![License](https://img.shields.io/github/license/RanaAhmar/js-form-validator-pro?style=flat-square)
![Dependencies](https://img.shields.io/badge/Dependencies-0-success?style=flat-square)

**A lightweight, zero-dependency vanilla JS form validator plugin.**

Tired of pulling in massive validation libraries like Yup or Joi just for a simple frontend contact form? `js-form-validator-pro` is a blazing fast, highly customizable validation library built purely in Vanilla JavaScript. It leverages HTML5 data attributes to make validation completely declarative.

## 🌟 Key Features

- **Blazing Fast**: Pure string matching and Regex. No massive AST trees.
- **Declarative HTML**: Define rules natively in your HTML using `data-validate="..."`.
- **Framework Agnostic**: Works perfectly in Vanilla JS, React, Vue, Svelte, or standard monolithic HTML templates.
- **Custom Error Messages**: Supports default messaging and custom overrides.

## 📚 Table of Contents

- [Installation](#-installation)
- [How to Use](#-how-to-use)
- [Available Rules](#-available-rules)
- [License](#-license)

## 📦 Installation

```bash
npm install js-form-validator-pro
```
*(Or include the `src/validator.js` file natively via script tag).*

## 🚀 How to Use

**1. HTML Setup**
Attach validation rules directly to your inputs.

```html
<form id="contact-form">
    <div class="form-group">
        <label>Email Address</label>
        <input type="email" name="email" data-validate="required|email" />
        <span class="error-text"></span>
    </div>

    <div class="form-group">
        <label>Password</label>
        <input type="password" name="pwd" data-validate="required|min:8" />
        <span class="error-text"></span>
    </div>

    <button type="submit">Submit</button>
</form>
```

**2. Initialize the Library**

```javascript
import FormValidator from 'js-form-validator-pro';

const form = document.getElementById('contact-form');
const validator = new FormValidator(form, {
    errorClass: 'is-invalid',
    onFail: (errors) => {
        console.log("Validation failed!", errors);
    },
    onSuccess: (formData) => {
        console.log("Validation passed! Sending data...", formData);
    }
});
```

## 🛠 Available Rules

| Rule | Description | Example |
| :--- | :--- | :--- |
| `required` | Field cannot be empty. | `data-validate="required"` |
| `email` | Must be a valid email format. | `data-validate="email"` |
| `min:X` | Minimum length of X characters. | `data-validate="min:8"` |
| `max:X` | Maximum length of X characters. | `data-validate="max:50"` |
| `numeric` | Must contain only numbers. | `data-validate="numeric"` |

## 🤝 Contributing
Feel free to open PRs to add more Regex rules!

## 📄 License
Released under the [MIT License](LICENSE).


---
### 🏢 About Stackaura
This project is proudly maintained backed and sponsored by **[Stackaura](https://www.stackaura.com/)**.
We specialize in building high-performance web applications, scalable SaaS architectures, and premium digital solutions.
👉 **[Visit Stackaura to supercharge your next project!](https://www.stackaura.com/)**

