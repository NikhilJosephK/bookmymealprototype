// import cors from 'cors'

// const corsMiddleware = cors({
//     origin: 'https://bookmymealprototype-mas7thxbo-nikhil-joseph-ks-projects.vercel.app', // allowed origin
//     methods: ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS'], // allowed methods
//     credentials: true, // allow cookies, authorization headers, etc.
// })

// function runMiddleware(req, res, fn) {
//     return new Promise((resolve, reject) => {
//         fn(req, res, (result) => {
//             if (result instanceof Error) {
//                 return reject(result)
//             }
//             return resolve(result)
//         })
//     })
// }

// export default async function handler(req, res) {
//     try {
//         // Run the CORS middleware
//         await runMiddleware(req, res, corsMiddleware)

//         // Explicitly set the CORS headers if needed
//         res.setHeader('Access-Control-Allow-Origin', 'https://bookmymealprototype-mas7thxbo-nikhil-joseph-ks-projects.vercel.app') // explicitly set the allowed origin
//         res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS') // allowed methods
//         res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization') // allowed headers

//         // Your existing API logic
//         res.status(200).json({ message: 'Registration successful' })
//     } catch (error) {
//         // Handle errors
//         res.status(500).json({ error: 'Something went wrong with CORS' })
//     }
// }
