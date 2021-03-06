const fetch = require('node-fetch');

const getCategoryFromShop = (category) => {
    return(
        fetchApiFromShop("http://bad-api-assignment.reaktor.com/products/" + category, {
            method: "GET", 
            headers: {
                "x-force-error-mode": "all"
            }
        })
        .then(json => {return json;})
        .catch(e => {
            console.log(e);
            return [];
        })
    );
}

const getAvailabilityFromShop = (manufacturer) => {
    return(
        fetchApiFromShop("https://bad-api-assignment.reaktor.com/availability/" + manufacturer, {
            method: "GET", 
            headers: {
                "x-force-error-mode": "all"
            }
        })
        .then(json => {
            if(json.code === 200) {
                return json.response;
            }
            return [];
        })
        .catch(e => {
            console.log(e);
            return [];
        })
    );
}

const fetchApiFromShop = (url) => {
    return(
        fetch(url)
        .then(responce => responce.json())
    );
}

module.exports = {
    getCategoryFromShop,
    getAvailabilityFromShop
};