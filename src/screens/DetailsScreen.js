import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const [details, setDetails] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')

    const getDetails = (id) => {
        yelp.get(`/${id}`,).then(
            (response) => {
                setDetails(response.data)
        }, (error) => {
            setErrorMessage('Something went wrong!')
            console.log(`${ error }`)
        })
    }

    useEffect(() => {
        getDetails(id)
    }, [])

    if (!details) {
        return null
    }

    return <View>
    <Text style = { styles.titleStyle } >{ details.name }</Text> 
        { errorMessage ? <Text style = { styles.errorMessageStyle }>{ errorMessage }</Text> : null }
        <FlatList
                data = { details.photos }
                keyExtractor = {( photo ) => photo }
                renderItem = {({ item }) => {
                    return <Image style = { styles.imageStyle } source = {{ uri: item }} />
                }}
        />
    </View>
}

const styles = StyleSheet.create({
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 20
    },
    errorMessageStyle: {
        fontSize: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 10,
        borderWidth: 4,
        borderColor: '#69c8ff',
        borderRadius: 10
    },
    imageStyle: {
        width: 200,
        aspectRatio: 16/9,
        borderRadius: 5,
        marginHorizontal: 10,
        marginBottom: 5
    }
})

export default ResultsShowScreen