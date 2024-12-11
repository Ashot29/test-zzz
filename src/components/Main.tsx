import Filter from "@/components/filter/Filter.tsx"
import TicketList from "@/components/tickets/TicketList.tsx"
import { Box, Container, Stack } from "@mui/material"
import { data } from "@/data/tickets.ts"
import { useMemo, useState } from "react"
import { StopsFilterModel } from "@/models/filter/stops-filter.model.ts"
import { mockCurrencies, numberOfStops } from "@/data/mock.ts"
import { CurrencyContext } from "@/contexts/currency.context.ts"

export const Main = () => {
    const [stopsFilterState, setStopsFilterState] = useState<StopsFilterModel>(() =>
        Object.fromEntries(numberOfStops.map(stopCount => [`${stopCount}`, true])),
    )
    const [currency, setCurrency] = useState(mockCurrencies[0])

    const ticketList = useMemo(() => {
        const numberOfStops = (Object.entries(stopsFilterState)
            .filter(val => val[1]))
            .map(val => +val[0])

        return data.filter(ticket =>
            numberOfStops.includes(ticket.stops),
        ).sort((a, b) =>
            a.price - b.price,
        )
    }, [stopsFilterState])

    return (
        <Container>
            <Stack marginTop={12} gap={3} direction="row">
                <Box sx={{ flex: 1 }}>
                    <Filter
                        filterState={stopsFilterState}
                        setFilterState={setStopsFilterState}
                        currency={currency}
                        setCurrency={setCurrency}
                    />
                </Box>
                <Box sx={{ flex: 2 }}>
                    <CurrencyContext.Provider value={{ currency }}>
                        <TicketList tickets={ticketList} />
                    </CurrencyContext.Provider>
                </Box>
            </Stack>
        </Container>
    )
}