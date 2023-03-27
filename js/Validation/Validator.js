export class Validator {

    constructor() {

    }

    validateInput(input, regexData) {

        if (input.value === "") return `${input.name} must be filled out.`;
        if (input.value.trim().length === "") return `${input.name} must not be empty.`;
        //if(!regexData.test(input.value)) return  `${input.name} is incorrect.`;

        return "";
    }


}