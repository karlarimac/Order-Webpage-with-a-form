import { Validator } from '../Validation/Validator.js';
import { regexData } from '../Validation/regexData.js';


/**
 * Responds to user inputs. Here, we use the FormData, a JS built-in class that 
 * provides a way to easily construct a set of key/value pairs representing form 
 * fields and their values.
 * 
 * More at {@link https://developer.mozilla.org/en-US/docs/Web/API/FormData FormData}.
 */
export class FormController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.validator = new Validator();
        this.view.createInputs(this.model.getInputData());

        // register one event handler for all input 'change' events
        this.view.inputs.forEach((input) => {
            input.addEventListener('change', this.handleInputChange);
        });

        // register form submit handler
        this.view.form.addEventListener('submit', this.handleFormSubmit);

    }

    handleInputChange = (event) => {
        //update model
        let input = event.target;
        this.model[input.name] = input.value;
        let checkError = this.validator.validateInput(input, regexData[input.name]);

        this.view.showError(input.name, checkError);
    }

    handleFormSubmit = (event) => {
        //prevent the default action of a form (prevent submitting it)
        event.preventDefault();

        // this.validator.validateInput(input.name, regexData[input.name]);
        let cleanedInputs = [];

        this.view.inputs.forEach((input, index) => {
            if (index < 3) {
                let checkError = this.validator.validateInput(input, regexData[input.name]);
                this.view.showError(input.name, checkError);
                if (checkError !== "") cleanedInputs.push(false);
                else cleanedInputs.push(true)
            }
        })

        if (cleanedInputs.every(Boolean)) this.model.persist();


    }
}
