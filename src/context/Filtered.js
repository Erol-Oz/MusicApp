// Filtered
import { createContext, useContext, useState } from 'react';
const filteredContext = createContext();
export const FilteredProvider = ({ children }) => {
    const [filterText, setFilterText] = useState("");
    const values = {
        filterText,
        setFilterText
    }
    return <filteredContext.Provider value={values}>
        {children}
    </filteredContext.Provider>
}
export const useFilter = () => useContext(filteredContext);



