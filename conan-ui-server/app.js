const express = require('express')
const request = require('request')
const cors = require('cors')

const port = 20000
const app = express()
app.use(express.json())
app.use(cors())

app.post('/api/0.1/conan-repo-status', function (req, res) {
  const conanUrl = req.body.url;
  const requestData = {
    method: 'GET',
    url: `${conanUrl}/v1/ping`,
    json: true
  };
  request(requestData, (error, response, body) => {
    let valid = (response !== undefined) && (response.statusCode === 200) && ('x-conan-server-version' in response.headers);
    console.log(`Conan ping result for ${requestData.url}: ${valid}`);
    res.json({url : conanUrl, valid : valid});
  });
});

app.listen(port, () => console.log(`Conan-UI-Server is listening on port ${port}!`));
