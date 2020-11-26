const { getAvailabilityFromShop } = require('./BadApi');

async function getAllItemsFromManufacturers(manufacturers) {
    var manufacturersAndItems = {};

    for(var manufacturer of manufacturers) { // Creates object with manufacturers' items
        let manufacturerItems = await getAvailabilityFromShop(manufacturer);
        manufacturersAndItems = Object.assign(manufacturersAndItems, {
            [manufacturer]: manufacturerItems
        })
    };

    return manufacturersAndItems;
    
}

module.exports = { getAllItemsFromManufacturers };