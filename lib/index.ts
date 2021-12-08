import Aircall from './aircall'

/**
 * Create an Aircall client
 *
 * @param {String} apiID
 * @param {String} apiToken
 * @return {Aircall}
 */

export default function aircall(apiID: string, apiToken: string) {
  if (!apiID) throw new Error('Aircall requires an apiID.');
  if (!apiToken) throw new Error('Aircall requires an apiToken.');
  else return new Aircall(apiID, apiToken);
};

export {
  Aircall
}
