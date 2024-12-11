import { TicketModel } from "@/models/ticket.model.ts"
import { StyledBox } from "@/components/common/StyledComponents.tsx"
import { Box, Button, Stack, styled, Typography } from "@mui/material"
import dayjs from "dayjs"
import { useCurrency } from "@/contexts/currency.context.ts"
import getSymbolFromCurrency from 'currency-symbol-map'

export interface SingleTicketProps {
    ticket: TicketModel;
}

const StyledLogo = styled('img')({
    maxWidth: "100%",
    height: 'auto',
    maxHeight: '70px'
})

const TicketBuySection = styled(Stack)({
    gap: 16,
    flex: 1,
    maxWidth: '250px',
    padding: 16,
    borderRight: '1px solid rgba(0, 0, 0, 0.2)'
})

const TicketInfoSection = styled(Stack)({
    padding: 16,
    gap: 8,
    flex: 1
})

const DateTextHeader = styled(Typography)({
    fontSize: 48,
    fontWeight: 500
})

const DateTextInfo = styled(Typography)({
    fontSize: 10
})

const FlightCity = styled(Typography)({
    fontSize: 14,
    fontWeight: 500
})

export const SingleTicket = ({ ticket }: SingleTicketProps) => {
    const currency = useCurrency();

    return (
        <StyledBox sx={{ display: 'flex' }}>
            <Stack direction="row">
                <TicketBuySection>
                    <Box padding={2}>
                        <StyledLogo src="./src/assets/airline_logo.png" alt="Airlines Logo" />
                    </Box>
                    <Button variant="contained" color="secondary" size="large">
                        Buy for {ticket.price}{getSymbolFromCurrency(currency)}
                    </Button>
                </TicketBuySection>
            </Stack>
            <TicketInfoSection>
                <Stack direction="row" width="100%" alignItems="center">
                    <DateTextHeader>
                        {ticket.departure_time}
                    </DateTextHeader>
                    <Stack gap={.5} sx={{ flex: 1, px: 1 }}>
                        <Stack alignItems="center">
                            <Typography fontSize={12}>{ticket.stops} Stops</Typography>
                        </Stack>
                        <Box sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.2)' }} />
                    </Stack>
                    <DateTextHeader>
                        {ticket.arrival_time}
                    </DateTextHeader>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Stack gap={1}>
                        <FlightCity>{ticket.origin}, {ticket.origin_name}</FlightCity>
                        <DateTextInfo>{dayjs(ticket.departure_date, "DD.MM.YY").format("DD MMMM YYYY, dd")}</DateTextInfo>
                    </Stack>
                    <Stack gap={1}>
                        <FlightCity>{ticket.destination}, {ticket.destination_name}</FlightCity>
                        <DateTextInfo>{dayjs(ticket.arrival_date, "DD.MM.YY").format("DD MMMM YYYY, dd")}</DateTextInfo>
                    </Stack>
                </Stack>
            </TicketInfoSection>
        </StyledBox>
    )
}