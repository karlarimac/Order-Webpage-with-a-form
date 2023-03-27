import { selectData } from '../store/selectData.js';

/**
 * Represents the application model. The model contains the data, the information 
 * regarding the dress such as: type and color. The model can obtain data either 
 * from a database or files, which could be located locally or externally. This 
 * class holds a reference to an exernal file that contains data for select options.
 * 
 * The model does not talk directly to a view, instead is made available to a 
 * controller which accesses it when needed. 
 */
export class DressModel {
    static store = selectData; // external resource

    /**
     * Creates an object representing the dress model.
     * 
     * @returns {DressModel} The object representing the dress model.
     */
    constructor() {
        this.type = "undefined";
        this.alteration = "undefined";
        this.accessories = "undefined";

    }

    /**
     * Returns an array of this object's properties names.
     * The returned array is used by View to dynamically render the selects. 
     * For each Model property, a select is being rendered in View.
     * 
     * @returns {Array} array of property names (strings)
     */
    getProperties() {
        return Object.keys(this);
    }

    /**
     * Gets the data from the external resource to be used as select options.
     * 
     * @param {String} selectID - select ID
     * @returns {Array} array of select's options (strings)
     */
    getOptions(selectID) {
        // 1. extract the data from the external resource (DressModel.store).
        let options; // a JS object
        switch (selectID) {
            case 'type':
                options = Object.keys(DressModel.store);

                break;
            case 'alteration':
                options = Object.keys(DressModel.store[this.type]);

                break;

            case 'accessories':
                options = Object.keys(DressModel.store[this.type][this.alteration]);
                break;

        }

        // 2. return select options
        return options;
    }

    /**
     * Resets this object's properties to "undefined". Not all properties are
     * going to be reset, only those that are listed after the property defined 
     * by this method parameter. 
     * 
     * @param {type} property - property from which the reset starts.
     */
    resetNextProperties(property) {
        let properties = Object.keys(this);
        let index = properties.indexOf(property);
        while (++index < properties.length) {
            this[properties[index]] = "undefined";
        }
    }


    persist() {
        localStorage.setItem('dress', JSON.stringify(this));

        //Let's test if this is stored. Delete this from your project:
        //        let dress = localStorage.getItem('dress');
        //        console.log(dress === null ? 'No dress found in local storage' : JSON.parse(dress));
        //        console.log(dress === null ? 'No dress found in local storage' : dress);
    }
}