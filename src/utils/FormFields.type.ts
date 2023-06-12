export type Option = {
    id: number;
    label: string;
}

export type FormField = {
    text: string;
    keyboardTypeOption?: "default" | "numeric";
    fieldType: "input" | "select" | "datePicker" | "switch" | "radioButton";
    options?: Option[];
    handlePress?: () => void;
}
