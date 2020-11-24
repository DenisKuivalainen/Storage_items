const { getCategoryFromShop } = require('./BadApi');
const { getAllItemsFromManufacturers } = require('./CategoryItemsManufacturers');

async function getApi(category) {
    var itemsInCategory = await getCategoryFromShop(category);
    if(itemsInCategory.length === 0) { // Check if request correct and return any items
        return [];
    }

    // Get unique manufacturers for further check of availability
    var manufacturers = [...new Set(itemsInCategory.map(item => item.manufacturer))];

    var itemsByManufacturers = await getAllItemsFromManufacturers(manufacturers);

    return itemsInCategory.map(item => {
        let itemManufacturer = itemsByManufacturers[item.manufacturer];
        return {
            id: item.id,
            name: item.name,
            color: item.color,
            manufacturer: item.manufacturer,
            price: item.price,
            availability: itemManufacturer[
                itemManufacturer.find(
                    val => val.id === item.id.toUpperCase()
                )
            ]
        }
    })
}

module.exports = { getApi };