const assert = require('chai').assert
const createRequest = require('../index.js').createRequest

describe('createRequest', () => {
  const jobID = '1'

  context('successful calls', () => {
    const requests = [
      { name: 'town', testData: { id: jobID, data: { address: '0xa55E01a40557fAB9d87F993d8f5344f1b2408072' } } }
    ]

    requests.forEach(req => {
      it(`${req.name}`, (done) => {
        createRequest(req.testData, (statusCode, data) => {
          // console.log(data.json().data.walks)
          // console.log(statusCode)

          // const walkSum = pet_response.data.walks.reduce((sum,d) => {
          //     return sum + d.Time_Walked
          //   }, 0)
          
          //   const distanceSum = pet_response.data.walks.reduce((sum,d) => {
          //     return sum + d.Distance_Walked
          //   }, 0)
          
          //   const dogCountSum = pet_response.data.walks.reduce((sum) => {
          //     return sum + 1
          //   }, 0)
            
          //   //this one is probably its own API response, which checks UNIX time over last week. So query UNIX larger than the [block.timestamp - 604800] (seconds in a week)
          //   //maybe these should be a batch API call? Since payments should only be once a week. But badge requests could be anytime? 
          //   const totalPaymentsDue = pet_response.data.walks.reduce((sum,d) => {
          //     return sum + (d.Distance_Walked*d.Time_Walked)
          //   }, 0)
          
          //   const name = pet_response.data.walks[0].Walker_Name
          //   const finalResponse = [name,walkSum,distanceSum,dogCountSum,totalPaymentsDue]

          // console.log(finalResponse)
          done()
        })
      })
    })
  })

  // context('error calls', () => {
  //   const requests = [
  //     { name: 'empty body', testData: {} },
  //     { name: 'empty data', testData: { data: {} } },
  //     { name: 'city not supplied', testData: { id: jobID, data: { dog: 'boston' } } },
  //     { name: 'unknown city', testData: { id: jobID, data: { city: 'not_real'} } },
  //   ]

  //   requests.forEach(req => {
  //     it(`${req.name}`, (done) => {
  //       createRequest(req.testData, (statusCode, data) => {
  //         assert.equal(statusCode, 500)
  //         assert.equal(data.jobRunID, jobID)
  //         assert.equal(data.status, 'errored')
  //         assert.isNotEmpty(data.error)
  //         done()
  //       })
  //     })
  //   })
  // })
})
