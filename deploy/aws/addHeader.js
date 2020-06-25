exports.handler = async (event, context) => {
  const requestURI = event.Records[0].cf.request.uri
  const response = event.Records[0].cf.response

  const headerName = 'File-Size'
  const UNCOMPRESSED_DATA_SIZE = '127423341'
  const UNCOMPRESSED_PLOTLY_SIZE = '3325432'

  switch(requestURI) {
    case '/data.json.gz':
      response.headers['File-Size'] = [{ key: 'File-Size', value: UNCOMPRESSED_DATA_SIZE }];
      response.headers['Content-Encoding'] = [{ key: 'Content-Encoding', value: 'gzip' }];
      response.headers['Content-Type'] = [{ key: 'Content-Type', value: 'application/json' }];
      return response
    case '/plotly-1.53.0.min.js.gz':
      response.headers['File-Size'] = [{ key: headerName, value: UNCOMPRESSED_PLOTLY_SIZE }];
      response.headers['Content-Encoding'] = [{ key: 'Content-Encoding', value: 'gzip' }];
      response.headers['Content-Type'] = [{ key: 'Content-Type', value: 'application/javascript' }];
      return response
    default: 
      return response
  }
}