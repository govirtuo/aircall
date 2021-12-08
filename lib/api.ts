var BASE_API = 'https://api.aircall.io/v1'

var request = require('superagent')

export type Options = Record<string, any>

export default class API {
  constructor(private apiID: string, private apiToken: string) { }

  query(method: string, endpoint: string, callback: Function, options?: Options) {
    request[method](BASE_API + endpoint)
      .auth(this.apiID, this.apiToken)
      .send(options ?? null)
      .end(function (err: any, res: any) {
        if (err) return callback(err)
        if ([200, 201, 204].indexOf(res.statusCode) < 0) return callback(new Error('[' + res.statusCode + '] Bad response: ' + res.text))
        return callback(null, res.body)
      })
  }

  get(endpoint: string, callback: Function, options?: Options) {
    this.query('get', endpoint, callback, options)
  }

  post(endpoint: string, callback: Function, options?: Options) {
    this.query('post', endpoint, callback, options)
  }

  put(endpoint: string, callback: Function, options?: Options) {
    this.query('put', endpoint, callback, options)
  }

  delete(endpoint: string, callback: Function, options?: Options) {
    this.query('delete', endpoint, callback, options)
  }
}
