export type Option = {
    id: number;
    name: string;
    label: string;
    isShow?: Condition[];
}

export type Condition = {
    fieldId: string;
    value: string;
}

export type FormField = {
    id: string;
    collapseTitle?: string;
    defaultValue?: string | number;
    text: string;
    multiline?: boolean;
    editable?: boolean;
    keyboardTypeOption?: "default" | "numeric";
    fieldType: "checkbox" | "range" | "input" | "select" | "datePicker" | "switch" | "radioButton";
    options?: Option[];
    handlePress?: (option?: Option) => void;
    minRange?: number;
    maxRange?: number;
    step?: number;
    validation?: any;
    condition?: Condition[];
    maxDate?: Date;
}
