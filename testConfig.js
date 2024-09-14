import dotenv from 'dotenv'
dotenv.config({
    path: `.env`,
    override: true
})

const testConfig = {
    baseURL: process.env.URL,
    userEmail: process.env.EMAIL,
    userPassword: process.env.PASSWORD,

}
export default testConfig