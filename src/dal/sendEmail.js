import axios from "axios";

export const sendEmail = async (data) => {
    await axios.post('https://smtp-nodejs-server-express.herokuapp.com/sendMessage', {data})
        .then(res => {
            console.log('Thanks')
        })
}
