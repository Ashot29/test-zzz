import { CurrencyFilter } from "@/components/filter/CurrencyFilter.tsx"
import { StopsFilter } from "@/components/filter/StopsFilter.tsx"
import { StyledBox } from "@/components/common/StyledComponents.tsx"
import { StopsFilterModel } from "@/models/filter/stops-filter.model.ts"
import { memo } from "react"

interface FilterProps {
    filterState: StopsFilterModel;
    setFilterState: React.Dispatch<React.SetStateAction<StopsFilterModel>>
    currency: string;
    setCurrency: React.Dispatch<React.SetStateAction<string>>
}

const Filter = memo(({ setFilterState, filterState, currency, setCurrency }: FilterProps) => {
    return (
        <StyledBox sx={{ padding: 1 }}>
            <CurrencyFilter setCurrency={setCurrency} currency={currency} />
            <StopsFilter setFilterState={setFilterState} filterState={filterState} />
        </StyledBox>
    )
})

export default Filter;