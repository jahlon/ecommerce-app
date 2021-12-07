class Client {

    getProducts = (name='') => {
        const url = 'http://localhost:5000/products?' + new URLSearchParams({name: name})
        return fetch(url, {
            headers: {
                Accept: 'application/json',
            }
        }).then(this.checkStatus)
            .then(this.parseJSON)
    }

    addItemToCart = (data) => {
        return fetch('http://localhost:5000/cart', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(this.checkStatus)
          .then(this.parseJSON)
    }

    deleteItem = (id) => {
        const url = 'http://localhost:5000/cart?' + new URLSearchParams({id: id})
        return fetch(url, {
            method: 'delete',
            headers: {
                'Accept': 'application/json'
            }
        }).then(this.checkStatus)
    }

    checkStatus = (response) => {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            const error = new Error(`HTTP Error ${response.statusText}`);
            error.status = response.statusText;
            error.response = response;
            console.log(error);
            throw error;
        }
    }

    parseJSON = (response) => {
        return response.json()
    }
}

export default new Client();