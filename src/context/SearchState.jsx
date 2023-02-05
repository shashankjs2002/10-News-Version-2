import { useState } from 'react';
import SearchContext from './SearchContext';

const SearchState = (props) => {
    const [query, setQuery] = useState('')
    const [modalId, setModalId] = useState(1)

    
    const [filters, setFilters] = useState({lang:"en", country:"in",category:"breaking-news" })
    
    
    return (
        <SearchContext.Provider value={{setQuery, query, filters, setFilters, modalId, setModalId}}>
            {props.children}
        </SearchContext.Provider>
    )

}

export default SearchState