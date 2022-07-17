import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer OfTcRtvVBGVNe4UNzURHKMHHdjl8IJmpEEJT3cY4VBS0oOfxHwUkjvvz_lTpe7Vk9F1qcaFMiokPAuTiqbZp_oZgV_pj_PcdjHIwtRQFUcU7GutcSJOFxx5e7JCCYnYx'
    }
})