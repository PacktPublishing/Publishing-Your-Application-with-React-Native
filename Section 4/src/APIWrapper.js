/* @flow */

class APIWrapper {
  _apiURL: string;

  constructor(apiURL: string) {
    this._apiURL = apiURL;
  }

  get(url, params) {
    // Assignment, handle params
    return fetch(`${this._apiURL}${url}`, {
      method: 'GET'
    }).then(this._parseResponse);
  }

  post(url, params) {} // Assignment?

  _parseResponse(response: Response) {
    // THIS ONLY FOR ERROR
    if (!response.ok) {
      return Promise.reject(new Error(`Error code ${response.status}`)); // Assignment, parse error from API
    }
    return response.json();
  }

  // _parseError(reason: any) {
  //   throw new Error(reason);
  // }
}

export default APIWrapper;
