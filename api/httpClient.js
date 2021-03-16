const DefaultOptions = {
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  Authorization: '',
  body: '',
};

class HttpClient {
  _baseURL;
  _headers;

  constructor(options = DefaultOptions) {
    this._baseURL = options.baseURL || '';
    this._headers = options.headers || {};
  }

  async _fetchJSON(endpoint, options = DefaultOptions) {
    const res = await fetch(this._baseURL + endpoint, {
      ...options,
      headers: this._headers,
    });

    if(!res.ok) return undefined;
    
    if (options.parseResponse !== false && res.status !== 204)
      return res.json();

    return undefined;
  }

  get(endpoint, options = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      method: 'GET',
    });
  }

  post(endpoint, body = {}) {
    this._headers = {
      'Content-Type': 'application/json',
    };
    return this._fetchJSON(endpoint, {
      body: JSON.stringify(body),
      method: 'POST',
    });
  }
}

export default HttpClient;
