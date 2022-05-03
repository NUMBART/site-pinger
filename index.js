const express = require('express')
const axios = require('axios');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  pingLeetboard();
  setTimeout(() => {pingLeetboard()}, 900000)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`site-pinger listening on port ${port}`)
})

async function pingLeetboard() {
  const response = await axios({
    method: 'get',
    url: 'https://leetboard.herokuapp.com/'
  });
  const responseBE = await axios({
    method: 'get',
    url: 'https://leetboard-backend.herokuapp.com/'
  });
  console.log(JSON.stringify(response.data, null, 2));
  console.log('\n\n\n', JSON.stringify(responseBE.data, null, 2));
}
