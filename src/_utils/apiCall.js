import Axios from 'axios';

export default Axios.create({
    baseURL:'https://content-books.googleapis.com/books/v1/',
    timeout:100000,
    headers:{
        'Content-Type':'application/json'
    }
})