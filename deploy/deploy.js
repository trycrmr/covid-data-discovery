require('dotenv').config()

// determine deployment target
;(async (deployTarget = 'aws') => {
try {
  console.info(process.env.AWS_TEST, deployTarget)
} catch(err) {
  throw err
}
})(process.argv[2])

// check if the configs for that deployment target exist. default to AWS.
// install the required npm modules
// when the npm modules are installed, proceed with the deployment

// aws deployment: 
// run the code in the covid-data-loader repo. get the output. check the output to make sure there wasn't an error.
// gzip that data
// upload the data to the S3 bucket
// generate a new addHeaders.js script with the appropriate env vars (not sure lambda can have env vars)
// upload and deploy the new addHeaders.js script

// other things:
// update the caching rules to where a hard refresh will get the latest data. Maybe the data from the origin, if that's easiest. 