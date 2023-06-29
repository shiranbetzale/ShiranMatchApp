import CustomCheckBox from "../components/CustomCheckBox/CustomCheckBox";
import CustomDatePicker from "../components/CustomDatePicker/ CustomDatePicker";
import CustomInput from "../components/CustomInput/CustomInput";
import CustomRadioButton from "../components/CustomRadioButton/CustomRadioButton";
import CustomRange from "../components/CustomRange/CustomRange";
import CustomSelect from "../components/CustomSelect/CustomSelect";
import CustomSwitch from "../components/CustomSwitch/CustomSwitch";
import { FormField } from "./FormFields.type";

const generateField = (props: FormField) => {
    const { maxDate, editable, minRange, maxRange, step, multiline, text, keyboardTypeOption, fieldType, options, handlePress = () => { } } = props;

    switch (fieldType) {
        case "input":
            return <CustomInput
                multiline={multiline}
                placeholder={text}
                editable={editable}
                keyboardType={keyboardTypeOption || "default"}
            />

        case "radioButton":
            return <CustomRadioButton
                text={text}
                radiosArray={options || []}
                onSelect={handlePress} />

        case "datePicker":
            return <CustomDatePicker
                text={text}
                maxDate={maxDate}
            />

        case "select":
            return <CustomSelect
                text={text}
                onSelect={handlePress}
                options={options || []}
            />

        case "switch":
            return <CustomSwitch
                text={text} />

        case "checkbox":
            return <CustomCheckBox
                text={text}
                options={options || []}
            />

        case "range":
            return <CustomRange
                text={text}
                step={step || 0}
                minRange={minRange || 0}
                maxRange={maxRange || 0}
            />

        default:
            break;
    }
}

export default generateField;
