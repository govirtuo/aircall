import request from 'superagent'

const BASE_API = 'https://api.aircall.io/v1'

export type Options = Record<string, any>

type Method = 'get' | 'post' | 'put' | 'delete'

export default class API {
  constructor(private apiID: string, private apiToken: string) { }

  query(method: Method, endpoint: string, callback: Function, options?: Options) {
    const req = request(method, BASE_API + endpoint).auth(this.apiID, this.apiToken)

    if (method === 'get') {
      req.query(options ?? {})
    } else {
      req.send(options)
    }

    req.end((err: any, res: any) => {
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
