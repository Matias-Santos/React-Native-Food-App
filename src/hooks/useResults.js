import { useState, useEffect } from "react"
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchAPI = ( newSearchTerm ) => {
        yelp.get('/search', {
            params: {
                limit: 50,
                term: newSearchTerm,
                location: 'san jose'
            }
        }).then(
            (response) => {
                setResults(response.data.businesses)
        }, (error) => {
            setErrorMessage('Something went wrong!')
            console.log(`${ error }`)
        })
    }

    useEffect( () => {
        searchAPI('mate')
    }, [] )

    return [ searchAPI, results, errorMessage ]
}