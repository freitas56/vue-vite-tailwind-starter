// get netlify envs
const fs = require('fs')
fs.writeFileSync('./.env', `SAMPLE_ENV_1=${process.env.SAMPLE_ENV_1}\SAMPLE_ENV_1=${process.env.SAMPLE_ENV_1}\n`)
