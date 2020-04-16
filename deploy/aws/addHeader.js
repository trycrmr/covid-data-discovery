exports.handler = async (event, context) => {
  const requestURI = event.Records[0].cf.request.uri
  const response = event.Records[0].cf.response

  const headerName = 'File-Size'
  const UNCOMPRESSED_DATA_SIZE = '14749554'
  const UNCOMPRESSED_PLOTLY_SIZE = '3325432'

  switch(requestURI) {
    case '/data.json.gz':
      response.headers[headerName] = [{ key: headerName, value: UNCOMPRESSED_DATA_SIZE }];
      return response
    case '/plotly-1.53.0.min.js.gz':
      response.headers[headerName] = [{ key: headerName, value: UNCOMPRESSED_PLOTLY_SIZE }];
      return response
    default: 
      return response
  }
}