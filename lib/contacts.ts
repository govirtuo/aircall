import API, { Options } from "./api"
import defaults from 'defaults'

export default class Contacts {
  constructor(private api: API) { }

  list(callback: Function, options?: Options): void {
    options = defaults(options, {
      // page: 1, // Pagination for list of objects
      // per_page: 20, // Number of objects fetched per request
      // order: 'asc', // Reorder entries per creation date, asc or desc
      // order_by: 'created_at', // Set the order field
      // from: (none), // Set a minimal creation date for objects	(UNIX timestamp)
      // to: (none)  // Set a maximal creation date for objects (UNIX timestamp)
    })

    this.api.get('/contacts', callback, options)
  }

  search(callback: Function, options?: Options) {
    options = defaults(options, {
      // page: 1, // Pagination for list of objects
      // per_page: 10, // Number of objects fetched per request
      // order: 'asc', // Reorder entries per creation date, asc or desc
      // order_by: 'created_at', // Set the order field
      // from: null, // Set a minimal creation date for objects	(non
      // to: null,  // Set a maximal creation date for objects
      // phone_number: (none),
      // email: (none)
    })
    this.api.get('/contacts/search', callback, options)
  }

  searchByPhoneNumber(phoneNumber: string, callback: Function, options?: Options) {
    options = defaults(options, {
      phone_number: phoneNumber
    })

    this.search(callback, options)
  }

  searchByEmail(email: string, callback: Function, options?: Options) {
    options = defaults(options, {
      email: email
    })

    this.search(callback, options)
  }

  create(callback: Function, options?: Options) {
    this.api.post('/contacts', callback, options)
  }

  get(id: string, callback: Function, options?: Options) {
    this.api.get('/contacts/' + id, callback, options)
  }

  update(id: string, callback: Function, options?: Options) {
    this.api.post('/contacts/' + id, callback, options)
  }

  delete(id: string, callback: Function, options?: Options) {
    this.api.delete('/contacts/' + id, callback, options)
  }
}
