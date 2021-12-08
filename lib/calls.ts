import API, { Options } from "./api"
import defaults from 'defaults'

export default class Calls {
  constructor(private api: API) { }

  list(callback: Function, options?: Options) {
    options = defaults(options, {
      // page: 1, // Pagination for list of objects
      // per_page: 20, // Number of objects fetched per request
      // order: 'asc', // Reorder entries per creation date, asc or desc
      // from: (none), // Set a minimal creation date for objects	(UNIX timestamp)
      // to: (none)  // Set a maximal creation date for objects (UNIX timestamp)
    })

    this.api.get('/calls', callback, options)
  }

  get(id: string, callback: Function, options?: Options) {
    this.api.get('/calls/' + id, callback, options)
  }

  link(id: string, link: string, callback: Function, options?: Options) {
    options = defaults(options, {
      link: link
    })

    this.api.post('/calls/' + id + '/link', callback, options)
  }

  insightCards(id: number, contents: any, callback: Function, options?: Options) {
    options = defaults(options, {
      contents
    })

    this.api.post('/calls/' + id + '/insight_cards', callback, options)
  }
}
