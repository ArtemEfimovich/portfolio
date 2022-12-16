import axios from "axios";

export const sendEmail = async (data) => {
    await axios.post('https://gmail-smtp-five.vercel.app/sendMessage', {data})
        .then(res => {
            console.log('Thanks')
        })
}
