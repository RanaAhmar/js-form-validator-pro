/**
 * JS Form Validator Pro
 * Zero-dependency declarative form validation.
 */

class FormValidator {
    constructor(formElement, options = {}) {
        if (!formElement) throw new Error("Form element is required.");
        
        this.form = formElement;
        this.options = {
            errorClass: options.errorClass || 'error',
            errorTextSelector: options.errorTextSelector || '.error-text',
            onSuccess: options.onSuccess || function(){},
            onFail: options.onFail || function(){},
        };

        this.rules = {
            required: {
                test: val => val.trim() !== '',
                message: "This field is required."
            },
            email: {
                test: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
                message: "Please enter a valid email address."
            },
            numeric: {
                test: val => /^\d+$/.test(val),
                message: "Only numbers are allowed."
            }
        };

        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.validateForm();
        });
    }

    validateForm() {
        let isValid = true;
        let errors = {};
        const inputs = this.form.querySelectorAll('[data-validate]');

        this.clearErrors();

        inputs.forEach(input => {
            const ruleString = input.getAttribute('data-validate');
            const rules = ruleString.split('|');
            const val = input.value;
            const name = input.getAttribute('name') || input.id || 'Field';

            for (let rule of rules) {
                // Parse dynamic rules like min:8
                let ruleName = rule;
                let ruleParam = null;
                
                if (rule.includes(':')) {
                    [ruleName, ruleParam] = rule.split(':');
                }

                // Check standard rules
                if (this.rules[ruleName]) {
                    if (!this.rules[ruleName].test(val)) {
                        this.showError(input, this.rules[ruleName].message);
                        errors[name] = this.rules[ruleName].message;
                        isValid = false;
                        break; // Stop at first error for this field
                    }
                }

                // Dynamic rule checks
                if (ruleName === 'min' && val.length < parseInt(ruleParam)) {
                    this.showError(input, `Minimum ${ruleParam} characters required.`);
                    errors[name] = `Minimum ${ruleParam} characters required.`;
                    isValid = false;
                    break;
                }
                if (ruleName === 'max' && val.length > parseInt(ruleParam)) {
                    this.showError(input, `Maximum ${ruleParam} characters allowed.`);
                    errors[name] = `Maximum ${ruleParam} characters allowed.`;
                    isValid = false;
                    break;
                }
            }
        });

        if (isValid) {
            const formData = Object.fromEntries(new FormData(this.form));
            this.options.onSuccess(formData);
        } else {
            this.options.onFail(errors);
        }
    }

    showError(input, message) {
        input.classList.add(this.options.errorClass);
        const parent = input.parentElement;
        const errorText = parent.querySelector(this.options.errorTextSelector);
        if (errorText) {
            errorText.innerText = message;
        }
    }

    clearErrors() {
        const inputs = this.form.querySelectorAll('[data-validate]');
        inputs.forEach(input => {
            input.classList.remove(this.options.errorClass);
            const parent = input.parentElement;
            const errorText = parent.querySelector(this.options.errorTextSelector);
            if (errorText) {
                errorText.innerText = '';
            }
        });
    }
}

export default FormValidator;
