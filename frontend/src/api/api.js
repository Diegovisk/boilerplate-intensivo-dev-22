const createRequest = function (url, body) {
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: new Headers({
            "Content-type": "application/json",
        }),
    });
};

const getRequest = function (url) {
    return fetch(url, {
        method: "GET",
    });
};

const deleteRequest = function (url) {
    return fetch(url, {
        method: "DELETE",
    });
};

const api = {
    baseUrl: function () {
        return "http://localhost:3000"
    },
    item: {
        endpoint: function () {
            return api.baseUrl() + "/item"
        },
        list: function () {
            return getRequest(this.endpoint())
        },
        create: function (body) {
            return createRequest(this.endpoint(), body)
        },
        delete: function (id) {
            return deleteRequest(this.endpoint() + "/" + id)
        },
    },
    category: {
        endpoint: function () {
            return api.baseUrl() + "/category"
        },
        list: function () {
            return getRequest(this.endpoint())
        },
    },
};

export default api