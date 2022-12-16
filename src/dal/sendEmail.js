import axios from "axios";

export const sendEmail = async (data) => {
    await axios.post('https://gmail-smtp-ah1v.vercel.app/sendMessage', {data})
        .then(res => {
            console.log('Thanks')
        })
}
