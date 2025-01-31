import {createContext} from 'react';

export const HomeContext = createContext({
    logOut: () => {},
    user: "",
    id: "",
    wallet: 0,
    perHoldings: [],
    watchlist: [],
});