export class FormModel {
    constructor() {
        this.name = "";
        this.email = "";
        this.init();
    }

    /**
     * Initializes this object properties. New properties are added based on the
     * data loaded from  localStorage.
     * 
     * @returns {undefined}
     */
    init() {
        let dress = JSON.parse(localStorage.getItem('dress'));
        for (let property in dress) {
            this[property] = dress[property];
        }
    }

    /**
     * Converts this object to a data object for the view. We could have also 
     * returned Object.entries(this), but in this case, we would be dealing 
     * with an array of arrays.
     * 
     * @returns {Object} a simple data object with inputs for the form view 
     */
    getInputData() {
        // 1. stringify this object to get rid of this object methods
        let inputsString = JSON.stringify(this);
        // 2. return as plain JS data object
        return JSON.parse(inputsString);
    }


    persist() {
        localStorage.setItem('dress', JSON.stringify(this));
    }
}


