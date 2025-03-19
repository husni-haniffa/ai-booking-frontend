import { SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select";
import { Select } from "../ui/select";


interface CustomSelectProps {
  options: { value: string; label: string }[];
  placeholder: string;
  onValueChange: (value: string) => void;
  value: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  placeholder,
  onValueChange,
  value,
}) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option: any) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;