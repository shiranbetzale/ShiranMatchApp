import CustomDatePicker from "../components/CustomDatePicker/ CustomDatePicker";
import CustomInput from "../components/CustomInput/CustomInput";
import CustomRadioButton from "../components/CustomRadioButton/CustomRadioButton";
import CustomSelect from "../components/CustomSelect/CustomSelect";
import CustomSwitch from "../components/CustomSwitch/CustomSwitch";
import CustomText from "../components/CustomText/CustomText";
import { FormField } from "./FormFields.type";

const generateField = (props: FormField) => {
    const { text, keyboardTypeOption, fieldType, options, handlePress = () => { } } = props;

    switch (fieldType) {
        case "input":
            return <CustomInput placeholder={text} keyboardType={keyboardTypeOption || "default"} />

        case "radioButton":
            return <CustomRadioButton text={text} radiosArray={options || []} onSelect={handlePress} />

        case "datePicker":
            return <>
                <CustomText text={text} />
                <CustomDatePicker />
            </>

        case "select":
            return <>
                <CustomText text={text} />
                <CustomSelect
                    onSelect={handlePress}
                    options={options || []} />
            </>

        case "switch":
            return <>
                <CustomText text={text} />
                <CustomSwitch />
            </>

        default:
            break;
    }
}

export default generateField;
