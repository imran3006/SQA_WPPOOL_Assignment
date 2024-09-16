import dotenv from 'dotenv'
dotenv.config({
    path: `.env`,
    override: true
})

const testConfig = {
    baseURL: process.env.URL,
    userName: process.env.USERNAME,
    userPassword: process.env.PASSWORD,

}
export default testConfig