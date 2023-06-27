export type Option = {
    id: number;
    name?: string;
    label: string;
}

export type FormField = {
    text: string;
    multiline?: boolean;
    keyboardTypeOption?: "default" | "numeric";
    fieldType: "checkbox" | "range" | "input" | "select" | "datePicker" | "switch" | "radioButton";
    options?: Option[];
    handlePress?: () => void;
    minRange?: number;
    maxRange?: number;
    step?: number;
}
