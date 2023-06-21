export type Option = {
    id: number;
    label: string;
}

export type FormField = {
    text: string;
    multiline?: boolean;
    keyboardTypeOption?: "default" | "numeric";
    fieldType: "checkbox" | "input" | "select" | "datePicker" | "switch" | "radioButton";
    options?: Option[];
    handlePress?: () => void;
}
