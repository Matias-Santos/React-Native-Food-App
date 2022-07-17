import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchAPI, results, errorMessage] = useResults()

    const filterResultsByPrice = ( price ) => {
        return results.filter( result => {
            return result.price === price
        })
    }
    
    return <View style = { styles.viewStyle }>
        <SearchBar searchTerm = { searchTerm }
            onSearchTermChange = { ( newSearchTerm ) => setSearchTerm( newSearchTerm ) }
            onSearchTermSubmit = { () => searchAPI(searchTerm) }
        />
        { errorMessage ? <Text style = { styles.errorMessageStyle }>{ errorMessage }</Text> : null }
        <ScrollView>
            <ResultsList 
                title = 'Cost Effective'
                results = { filterResultsByPrice('$') }
            />
            <ResultsList
                title = 'Bit Pricier'
                results = { filterResultsByPrice('$$') }
            />
            <ResultsList
                title = 'Big Spender'
                results = { filterResultsByPrice('$$$') }
            />
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        // We can achieve the same result by returning an empty tag, instead of a View tag
        flex: 1
    },
    errorMessageStyle: {
        fontSize: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 10,
        borderWidth: 4,
        borderColor: '#69c8ff',
        borderRadius: 10
    }
})

export default SearchScreen