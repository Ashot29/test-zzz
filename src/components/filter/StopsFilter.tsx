import { Fragment, useCallback, useMemo } from "react"
import { FilterSubheader } from "@/components/filter/FilterComponents.tsx"
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material"
import { StopsFilterModel } from "@/models/filter/stops-filter.model.ts"
import { SingleStopFilter } from "@/components/filter/SingleStopFilter.tsx"
import { numberOfStops } from "@/data/mock.ts"

interface StopsFilterProps {
    filterState: StopsFilterModel;
    setFilterState: React.Dispatch<React.SetStateAction<StopsFilterModel>>
}

export const StopsFilter = ({ filterState, setFilterState }: StopsFilterProps) => {

    const allSelected = useMemo(() => {
        return Object.values(filterState).filter(val => !!val).length === numberOfStops.length
    }, [filterState])

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterState(prev => ({
            ...prev,
            [event.target.name]: event.target.checked,
        }));
    }, []);

    const handleChangeAll = () => {
        if (allSelected) {
            setFilterState(Object.fromEntries(numberOfStops.map(stopCount => [`${stopCount}`, false])))
            return
        }
        setFilterState(Object.fromEntries(numberOfStops.map(stopCount => [`${stopCount}`, true])))
    }

    return (
        <Fragment>
            <FilterSubheader sx={{ marginTop: 3 }}>
                Number of Stops
            </FilterSubheader>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox checked={allSelected} onChange={handleChangeAll} />
                    }
                    label="All"
                />
                {
                    numberOfStops.map(stopCount => (
                        <SingleStopFilter
                            key={stopCount}
                            checked={filterState[stopCount]}
                            name={`${stopCount}`}
                            handleChange={handleChange}
                            label={stopCount === 0 ? 'No Stops' : `${stopCount} Stops`}
                        />
                    ))
                }
            </FormGroup>
        </Fragment>
    )
}