import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import { Fragment } from "react"
import { FilterSubheader } from "@/components/filter/FilterComponents.tsx"
import { mockCurrencies } from "@/data/mock.ts"

interface CurrencyFilterProps {
    currency: string;
    setCurrency: React.Dispatch<React.SetStateAction<string>>
}

export const CurrencyFilter = ({ setCurrency, currency }: CurrencyFilterProps) => {
    const handleChange = (
        _event: React.MouseEvent<HTMLElement>,
        value: string,
    ) => {
        setCurrency(value)
    }

    return (
        <Fragment>
            <FilterSubheader>
                Currency
            </FilterSubheader>
            <ToggleButtonGroup
                color="primary"
                value={currency}
                onChange={handleChange}
                exclusive
                fullWidth
            >
                {
                    mockCurrencies.map(cur => (
                        <ToggleButton key={cur} value={cur}>
                            {cur}
                        </ToggleButton>
                    ))
                }
            </ToggleButtonGroup>
        </Fragment>
    )
}