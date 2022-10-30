import {
    DynamicFormModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicRadioGroupModel
} from "@ng-dynamic-forms/core";

export const MY_FORM_MODEL: DynamicFormModel = [

    new DynamicInputModel({
        id: "dc-batman",
        label: "Batman",
        maxLength: 42,
        placeholder: "Bruce Wayne"
    }),
    new DynamicInputModel({
        id: "dc-superman",
        label: "Superman",
        maxLength: 42,
        placeholder: "nKal-El"
    }),
    new DynamicInputModel({
        id: "dc-flash",
        label: "Flash",
        maxLength: 42,
        placeholder: "Jay Garrick"
    }),

    new DynamicRadioGroupModel<string>({
        id: "sampleRadioGroup",
        label: "Sample Radio Group",
        options: [
            {label: "Option 1", value: "option-1"},
            {label: "Option 2", value: "option-2"},
            {label: "Option 3", value: "option-3"}
        ],
        value: "option-3"
    }),

    new DynamicCheckboxModel({
        id: "sampleCheckbox",
        label: "I do agree"
    })
];