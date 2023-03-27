/**
 * Represents the View. View holds refences to all GUI elements user interacts with.
 * The View exposes methods to interact with the view elements. 
 */
export class FormView {
    constructor() {
        this.inputs = null;
        this.form = document.querySelector('#form-dress-name');
    }

    /**
     * Creates form inputs based on the injected JS object with data.
     * 
     * @param {Object} dataObject - JS object containing input data for this form
     * @returns {undefined}
     */
    createInputs(dataObject) {
        for (let property in dataObject) {
            this.form.querySelector('fieldset').insertAdjacentHTML('beforeend',
                `<p>${property}
                    <input name='${property}'
                     value='${dataObject[property]}' 
                     type='text' size='30'/>
                     <p id='${property}-error'></p>
                     </p>`);
        }

        this.inputs = document.querySelectorAll('input[type=text');
    }

    showError(inputName, error) {
        console.log(error);
        document.querySelector(`#${inputName}-error`).innerHTML = error;
    }

}

