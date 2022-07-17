import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const ResultsDetails = ({ result }) => {
    return <View>
        <Image style = { styles.imageStyle } source = {{ uri: result.image_url }}/>
        <Text style = { styles.titleStyle }>{ result.name }</Text>
        <Text style = { styles.ratingStyle }>{ result.rating } stars, { result.review_count } reviews</Text>
    </View>
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 200,
        aspectRatio: 16/9,
        borderRadius: 5,
        marginLeft: 10,
        marginBottom: 5
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10
    },
    ratingStyle: {
        opacity: 0.6,
        marginLeft: 10
    }
})

export default ResultsDetails