import React from "react"
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

import ResultsDetails from "./ResultsDetail"

const ResultsList = ({ navigation, title, results }) => {
    if (results.length === 0) {
        return null
    }

    return <View style = { styles.viewStyle }>
        <Text style = { styles.titleStyle }>{ title }</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator = { false }
            data = { results }
            keyExtractor = {( result ) => result.id }
            renderItem = {({ item }) => {
                return <TouchableOpacity onPress = { () => { navigation.navigate('Details', { id: item.id }) }}>
                    <ResultsDetails
                        navigation = { navigation }
                        result = { item }
                    />
                </TouchableOpacity>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        marginBottom: 20
    },
    titleStyle: {
        fontSize: 25,
        marginHorizontal: 10,
        marginBottom: 5
    }
})

export default withNavigation(ResultsList)