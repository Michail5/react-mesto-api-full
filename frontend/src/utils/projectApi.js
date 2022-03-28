import {AUTORIZATION_PARAMS} from "./utils";

class Api {
  constructor(params) {
    this._params = params;
    this._queryParams = {
      credentials: 'include',
      headers: this._params.headers,
    };
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getInitialCards() {
    return fetch(`${this._params.baseRoute}/cards`, this._queryParams)
      .then(res => {
        return this._getResponseData(res)
      });
  }

  getUserInfo() {
    return fetch(`${this._params.baseRoute}/users/me`, this._queryParams)
      .then(res => {
        return this._getResponseData(res)
      });
  }

  patchUserInfo(name, about) {
    const queryParams = {
      ...this._queryParams,
      method: 'PATCH',
      body: JSON.stringify({
        name: name,
        about: about
      })
    }
    return fetch(`${this._params.baseRoute}/users/me`, queryParams)
      .then(res => {
        return this._getResponseData(res)
      });
  }

  patchUserPhoto(link) {
    const queryParams = {
      ...this._queryParams,
      method: 'PATCH',
      body: JSON.stringify({
        avatar: link,
      })
    }
    return fetch(`${this._params.baseRoute}/users/me/avatar`, queryParams)
      .then(res => {
        return this._getResponseData(res)
      });
  }

  addNewCard(name, link) {
    const queryParams = {
      ...this._queryParams,
      method: 'POST',
      body: JSON.stringify({
        name: name,
        link: link
      })
    }
    return fetch(`${this._params.baseRoute}/cards`, queryParams)
      .then(res => {
        return this._getResponseData(res)
      });
  }

  deleteCard(id) {
    const queryParams = {
      ...this._queryParams,
      method: 'DELETE',
    }
    return fetch(`${this._params.baseRoute}/cards/${id}`, queryParams)
      .then(res => {
        return this._getResponseData(res)
      });
  }

  handleLikeButton(id, isLiked) {
    if (!isLiked) {
      const queryParams = {
        ...this._queryParams,
        method: 'PUT',
      }
      return fetch(`${this._params.baseRoute}/cards/${id}/likes`, queryParams)
        .then(res => {
          return this._getResponseData(res)
        });
    } else {
      const queryParams = {
        ...this._queryParams,
        method: 'DELETE',
      }
      return fetch(`${this._params.baseRoute}/cards/${id}/likes`, queryParams)
        .then(res => {
          return this._getResponseData(res)
        });
    }
  }
  signOut() {
    const queryParams = {
      ...this._queryParams,
      method: 'POST',
    }
    return fetch(`${this._params.baseRoute}/signout`, queryParams)
      .then(res => {
        return this._getResponseData(res)
      });
  }
}

export const projectApi = new Api(AUTORIZATION_PARAMS);
