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
| :


---

## 🚀 Discover More from Stackaura

If you found this tool useful, check out our other high-performance web utilities and follow **Ahmar Hussain** for more open-source excellence.

### 🌟 Featured Projects
- **[Free LLM APIs](https://github.com/RanaAhmar/free-llm-apis)** - A curated list of zero-cost AI endpoints.
- **[Awesome MCP Servers](https://github.com/RanaAhmar/awesome-mcp-servers)** - The ultimate collection of Model Context Protocol implementations.
- **[System Design Cheatsheet](https://github.com/RanaAhmar/system-design-cheatsheet)** - Master complex architectures in minutes.
- **[Next.js SaaS Starter](https://github.com/RanaAhmar/nextjs-saas-starter)** - The fastest way to launch your next product.

### 🔗 Stay Connected
- **Website:** [stackaura.com](https://www.stackaura.com/)
- **Author:** [Ahmar Hussain](https://github.com/RanaAhmar)

---



