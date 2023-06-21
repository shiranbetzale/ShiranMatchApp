import CustomCheckBox from "../components/CustomCheckBox/CustomCheckBox";
import CustomDatePicker from "../components/CustomDatePicker/ CustomDatePicker";
import CustomInput from "../components/CustomInput/CustomInput";
import CustomRadioButton from "../components/CustomRadioButton/CustomRadioButton";
import CustomSelect from "../components/CustomSelect/CustomSelect";
import CustomSwitch from "../components/CustomSwitch/CustomSwitch";
import { FormField } from "./FormFields.type";

const generateField = (props: FormField) => {
    const { multiline, text, keyboardTypeOption, fieldType, options, handlePress = () => { } } = props;

    switch (fieldType) {
        case "input":
            return <CustomInput multiline={multiline} placeholder={text} keyboardType={keyboardTypeOption || "default"} />

        case "radioButton":
            return <CustomRadioButton text={text} radiosArray={options || []} onSelect={handlePress} />

        case "datePicker":
            return <CustomDatePicker text={text} />

        case "select":
            return <CustomSelect
                text={text}
                onSelect={handlePress}
                options={options || []} />

        case "switch":
            return <CustomSwitch text={text} />

        case "checkbox":
            return <CustomCheckBox text={text} options={options || []} />

        default:
            break;
    }
}

export default generateField;
