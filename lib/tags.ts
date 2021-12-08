import API, { Options } from "./api"
import defaults from 'defaults'

export default class Tags {
  constructor(private api: API) { }

  list(callback: Function, options?: Options) {
    options = defaults(options, {
      // page: 1, // Pagination for list of objects
      // per_page: 50, // Number of objects fetched per request
      // order: 'asc', // Reorder entries per creation date, asc or desc
      // from: null, // Set a minimal creation date for objects	(non
      // to: null  // Set a maximal creation date for objects
    })

    this.api.get('/tags', callback, options)
  }

  create(callback: Function, options?: Options) {
    this.api.post('/tags', callback, options)
  }

  get(id: string, callback: Function, options?: Options) {
    this.api.get('/tags/' + id, callback, options)
  }

  update(id: string, callback: Function, options?: Options) {
    this.api.put('/tags/' + id, callback, options)
  }

  delete(id: string, callback: Function, options?: Options) {
    this.api.delete('/tags/' + id, callback, options)
  }
}
