# Storage items - interview task

This project was done as an interview task.
>Your client is a clothing brand that is looking for a simple web app to use in their warehouses. To do their work efficiently, the warehouse workers need a fast and simple listing page per product category, where they can check simple product and availability information from a single UI.

## Links

* [WEB App](https://reactorjuniortask.herokuapp.com/) hosted on Heroku;

## Technologies

* React
* Node

## Application logic
The point was to display data of items in storage, which were achieved from some legacy API. 
As the data, which was possible to obtain from API, is some kind of collapsed, there were need to combine it into a single json format.

#### Back end
##### Overview
The documentation from the task: 
>GET /products/:category – Return a listing of products in a given category.
GET /availability/:manufacturer – Return a list of availability info.

Data recieved from the API requests (products and availability respectively):
![Legacy API data](https://i.ibb.co/2ZVLpRT/image.png)

As there were need to display all available data, the final format should look like:
![Reorganizing data](https://i.ibb.co/RQPRbB5/image.png)
##### Realization
As result, the backend operates by follow scenario:

**_STEP 1._** Get products data about required category.
**_STEP 2._** Select unique manufacturers from recieved data.
```javascript
var manufacturers = [...new Set(itemsInCategory.map(item => item.manufacturer))];
```
**_STEP 3._** From array just got, get an object of type {"manufacturer1": [item1, item2, ...], ...}.
```javascript
async function getAllItemsFromManufacturers(manufacturers) { // The fuction gets the array of manufacturers
    var manufacturersAndItems = {};

    for(var manufacturer of manufacturers) { // Creates object with manufacturers' items
        let manufacturerItems = await getAvailabilityFromShop(manufacturer); // Gets data about manufacturer's items
        manufacturersAndItems = Object.assign(manufacturersAndItems, {
            [manufacturer]: manufacturerItems
        })
    };
    return manufacturersAndItems; // Object {"manufacturer1": [item1, item2, ...], ...}
}
```
**_STEP 4._** Get new array, which will be sent to client.

So, for every item in products data:
_STEP 4.1._ Find data about the manufacturer, comparing id.
```javascript
let datapayload = itemManufacturer.find(
    val => val.id === item.id.toUpperCase() // IDs are stored in different format
)["DATAPAYLOAD"];
```
_STEP 4.2._ Create and return to be placed in array the object with all information about the item.
```javascript
return {
    id: item.id,
    name: item.name,
    color: item.color,
    manufacturer: item.manufacturer,
    price: item.price,
    availability: datapayload
}
```

**_STEP 5._** In case step 4 can return an error, it was wrapped into _try... catch_ block. So in case of error the message, the server will send 500 HTTP error to client.
```javascript
try{
    ...
} catch(e) {
    console.log(e);
    res.status(500).send('Something is broken!');
    return;
}
```

### Front end
The two main points of WEB app: clear display of data and handling server errors. 

##### UI
The UI is not complex, done with Material UI.
The app has 4 pages: 3 products categories and one with few information about the app (it appears if the route path mismatch). 
![Product category page](https://i.ibb.co/0Fw3160/image.png)
![Info page](https://i.ibb.co/XyrrfQ8/image.png)

##### Fetching not fetched data
The data can be loaded after DOM is rendered or by clicking reload button.
```javascript
async loadData() {
    // Unables refreshing of data and clear all current data
    await this.setState({ // Await is used as setState is asynch
        loaded: 0, // Disables reload button
        jackets: [],
        shirts: [],
        accessories: [],
    }); 
    for(var category of this.state.categories) { // Load data for each category
        this.getData(category);
    }
}
```

The fetch function is enclosed in a loop, which will be executed while server will send ok responce.
```javascript
async getData(category) {
    var notFetched = true;
    while(notFetched) { // Loop used to 100% data recieve, even if errors
        await fetch('/items?category=' + category)
        ...
        .then(data => {
            this.setState({
                [category]: data,
                loaded: this.state.loaded + 1 // Button will be enabled ONLY if this variable is greater than 3, e.g. all 3 categories are loaded
            })
            notFetched = false; //Escape the loop
        })
        .catch(e => console.log(e));
    }
}
```

## License

MIT

