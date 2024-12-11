import { Checkbox, FormControlLabel } from "@mui/material"

interface SingleStopFilterProps {
    checked: boolean;
    name: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
}

export const SingleStopFilter = ({ checked, name, handleChange, label }: SingleStopFilterProps) => {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={checked}
                    name={name}
                    onChange={handleChange}
                />
            }
            label={label}
        />
    )
}