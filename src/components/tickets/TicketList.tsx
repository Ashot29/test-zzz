import { Stack } from "@mui/material"
import { TicketModel } from "@/models/ticket.model.ts"
import { SingleTicket } from "@/components/tickets/ticket/SingleTicket.tsx"
import { memo } from "react"

interface TicketListProps {
    tickets: TicketModel[]
}

const TicketList = memo(({ tickets }: TicketListProps) => {
    return (
        <Stack gap={3} padding={1} sx={{ maxHeight: '600px', overflowY: 'auto' }}>
            {
                tickets.map((ticket, index) => (
                    <SingleTicket key={index} ticket={ticket} />
                ))
            }
        </Stack>
    )
});

export default TicketList