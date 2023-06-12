import { option } from "../../utils/FormFields.type";

export type CustomSelectType = {
  options: option[];
  onSelect: () => void;
};
