const { getCategoryFromShop } = require('./BadApi');
const { getAllItemsFromManufacturers } = require('./CategoryItemsManufacturers');

async function getApi(req, res) {
    var itemsInCategory = await getCategoryFromShop(req.query.category);
    if(itemsInCategory.length === 0) { // Check if request correct and return any items
        res.status(400).send('Something is broken!');
        return;
    }

    // Get unique manufacturers for further check of availability
    var manufacturers = [...new Set(itemsInCategory.map(item => item.manufacturer))];

    var itemsByManufacturers = await getAllItemsFromManufacturers(manufacturers);

    // Map each item in category with it availability status
    var responce = itemsInCategory.map(item => {
        let itemManufacturer = itemsByManufacturers[item.manufacturer];
        
        let datapayload = itemManufacturer.find(
            val => val.id === item.id.toUpperCase()
        )["DATAPAYLOAD"];
        datapayload = datapayload.replace(/\n/g,'').replace(/\s+/g, '');

        return {
            id: item.id,
            name: item.name,
            color: item.color,
            manufacturer: item.manufacturer,
            price: item.price,
            availability: datapayload
        }
    });

    res.send(JSON.stringify(responce));
}

module.exports = { getApi };