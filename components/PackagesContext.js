import { createContext } from 'react'
import useLocalStorageState from 'use-local-storage-state';

export const PackagesContext = createContext({})

export function PackagesContextProvider({children}){
    const [selectedPackages,setSelectedPackages] = useLocalStorageState('cart', {defaultValue:[]})
    return(
        <PackagesContext.Provider value={{selectedPackages,setSelectedPackages}}>
        {children}
        </PackagesContext.Provider>
    )
}