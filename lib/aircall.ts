import API from './api'
import Calls from './calls'
import Contacts from './contacts'
import Numbers from './numbers'
import Tags from './tags'
import Users from './users'

export default class Aircall {
  private api: API
  public calls: Calls
  public contacts: Contacts
  public numbers: Numbers
  public tags: Tags
  public users: Users

  constructor(apiID: string, apiToken: string) {
    this.api = new API(apiID, apiToken)

    this.calls = new Calls(this.api)
    this.contacts = new Contacts(this.api)
    this.numbers = new Numbers(this.api)
    this.tags = new Tags(this.api)
    this.users = new Users(this.api)
  }

  ping(callback: Function) {
    this.api.get('/ping', callback)
  }

  company(callback: Function) {
    this.api.get('/company', callback)
  }
}
