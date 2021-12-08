import defaults from 'defaults';
import API, { Options } from './api';

export default class Users {
  constructor(private api: API) { }

  list(callback: Function, options?: Options) {
    options = defaults(options, {
      // page: 1, // Pagination for list of objects
      // per_page: 20, // Number of objects fetched per request
      // order: 'asc', // Reorder entries per creation date, asc or desc
      // from: (none), // Set a minimal creation date for objects	(UNIX timestamp)
      // to: (none)  // Set a maximal creation date for objects (UNIX timestamp)
    });

    this.api.get('/users', callback, options);
  };

  get(id: string, callback: Function, options?: Options) {
    this.api.get('/users/' + id, callback, options);
  };
}
