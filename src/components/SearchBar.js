import React from "react";
import { View, TextInput, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const SearchBar = ( { searchTerm, onSearchTermChange, onSearchTermSubmit }) => {
    return <View style = { styles.viewStyle }>
        <Ionicons name = 'search-outline'
            style = { styles.iconStyle }
        />
        <TextInput style = { styles.textStyle }
            autoCapitalize = 'none'
            autoComplete = { false }
            placeholder = 'Search'
            value = { searchTerm }
            onChangeText = { newSearchTerm => onSearchTermChange(newSearchTerm) }
            onEndEditing = { () => onSearchTermSubmit()}
        />
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#d8d8d8',
        borderRadius: 5,
        height: 50,
        margin: 10,
        flexDirection: 'row'
    },
    iconStyle: {
        fontSize: 45,
        alignSelf: 'center',
        marginHorizontal: 5
    },
    textStyle: {
        fontSize: 25,
        alignSelf: 'center',
        flex: 1
    }
})

export default SearchBar