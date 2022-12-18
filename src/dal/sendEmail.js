import axios from "axios";

export const sendEmail = async (data) => {
    await axios.post('https://gmail-smtp-five.vercel.app/message', {data})
        .then(res => {
            console.log('Thanks')
        })
}
