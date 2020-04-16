'use strict';

exports.handler = (event, context, callback) => {
  const requestURI = event.Records[0].cf.request.uri
  if(requestURI === '/index.html') callback(null, response);
  const response = event.Records[0].cf.response

  const headerName = 'File-Size'
  const UNCOMPRESSED_DATA_SIZE = 14749554
  const UNCOMPRESSED_PLOTLY_SIZE = 3325432

  switch(requestURI) {
    case '/data.json.gz':
      response.headers[headerName] = [{ key: headerName, value: UNCOMPRESSED_DATA_SIZE }];
      callback(null, response);
      break
    case '/plotly-1.53.0.min.js.gz':
      response.headers[headerName] = [{ key: headerName, value: UNCOMPRESSED_PLOTLY_SIZE }];
      callback(null, response);
      break
  }
}