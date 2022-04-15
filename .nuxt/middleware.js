const middleware = {}

middleware['authentication'] = require('..\\middleware\\authentication.js')
middleware['authentication'] = middleware['authentication'].default || middleware['authentication']

middleware['routeCheck'] = require('..\\middleware\\routeCheck.js')
middleware['routeCheck'] = middleware['routeCheck'].default || middleware['routeCheck']

export default middleware
