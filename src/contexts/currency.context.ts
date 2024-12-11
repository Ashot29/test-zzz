import { createContext, useContext } from "react"

interface CurrencyContextModel {
    currency: string
}

export const CurrencyContext = createContext<CurrencyContextModel>({} as CurrencyContextModel);

export const useCurrency = () => {
    return useContext(CurrencyContext).currency;
};
