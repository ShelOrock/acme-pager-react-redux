import { post } from 'axios'

const postData = () => {
    post('/api/employees')
    .then(res => {
        console.log(res.data);
    })
}

export default postData;