// pages/api/registration.js
import cors from 'cors'

const corsMiddleware = cors({
    origin: ['https://bookmymealprototype-mas7thxbo-nikhil-joseph-ks-projects.vercel.app'],
    methods: ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
})

export default function handler(req, res) {
    return new Promise((resolve, reject) => {
        corsMiddleware(req, res, (err) => {
            if (err) return reject(err)
            // Your existing API logic here
        })
    })
}