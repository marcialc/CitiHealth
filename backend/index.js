const bodyParser = require('body-parser')
const express = require('express')
const request = require('request')
const uuidv1 = require('uuid/v1')
const PORT = process.env.PORT || 5000

express()
  .use(bodyParser.json())
  .get('/', (req,res) => {
    res.json("hey from root");
  })
  .get('/details', (req,res) => {
    const options = { method: 'GET',
    url: 'https://sandbox.apihub.citi.com/gcb/api/v2/accounts/details',
    headers: 
    { client_id: '37be670a-f909-41e6-8b00-2f6aba374f2f',
      accept: 'application/json',
      uuid: uuidv1(),
      authorization: `Bearer ${"AAIkMzdiZTY3MGEtZjkwOS00MWU2LThiMDAtMmY2YWJhMzc0ZjJmaXTaxo2u5sNGuQZqPFzgUpWCQE1yRVT0lGn8p02vG-XYC3wxpHTaHDbXrxuCT37meDnT-fu_x75F9VEYZb1TYgtU9BrGN_d2fWca1mN2XJgy54JubThmgOB7QZQGQ6doPqhFcNe1By938ItVRpAhBVhVbq5oh2QVEuUSiM9N8bCRR6GUz0rzwGYj5CWN4eqwA45LXC8aLIWQT-7MdJlehw"}` } };

    request(options, function (error, response, body) {
      if (error) return console.error('Failed: %s', error.message);

      console.log('Success: ', body);
      res.send(body);
    });
  })
  .get('/transactions', (req,res) => {
    const user_id = "8035a60debb671e89bd451c9ad0f283e8f1b8868dd4dc65520ceb7bdfeb4142999f574c9db37917ef0edfae296745142543e3ad2bc034887f37212ecbde83ee0";
    const options = { method: 'GET',
    url: `https://sandbox.apihub.citi.com/gcb/api/v2/accounts/${user_id}/transactions`,
    qs: 
    { transactionFromDate: '2017-02-01',
      transactionToDate: '2017-02-26' },
    headers: 
    { client_id: '37be670a-f909-41e6-8b00-2f6aba374f2f',
      accept: 'application/json',
      uuid: uuidv1(),
      authorization: `Bearer ${"AAIkMzdiZTY3MGEtZjkwOS00MWU2LThiMDAtMmY2YWJhMzc0ZjJmaXTaxo2u5sNGuQZqPFzgUpWCQE1yRVT0lGn8p02vG-XYC3wxpHTaHDbXrxuCT37meDnT-fu_x75F9VEYZb1TYgtU9BrGN_d2fWca1mN2XJgy54JubThmgOB7QZQGQ6doPqhFcNe1By938ItVRpAhBVhVbq5oh2QVEuUSiM9N8bCRR6GUz0rzwGYj5CWN4eqwA45LXC8aLIWQT-7MdJlehw"}` } };

    request(options, function (error, response, body) {
      if (error) return console.error('Failed: %s', error.message);

      console.log('Success: ', body);
      res.send(body);
    });
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
