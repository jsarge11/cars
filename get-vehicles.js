const axios = require("axios");
const getKey = require("./get-bearer-key");
const { filters, getHeaders } = require('./utils');

module.exports = async () => {
    const auth = await getKey();

    try {
        const { data } = await axios.post('https://inventoryservices.bmwdealerprograms.com/vehicle', filters, getHeaders(auth))
        const cognac = data.vehicles.filter(vehicle => vehicle.interior?.toLowerCase().includes('cognac'))
        const description = `Found ${cognac.length} matching out of ${data.vehicles.length}.`;
        const found = cognac.map(vehicle => {
            return {
                price: vehicle.internetPrice,
                year: vehicle.year,
                model: vehicle.model,
                interior: vehicle.interior,
                trim: vehicle.trimDescription,
                miles: vehicle.odometer,
                drive: vehicle.drivetrain,
                link: vehicle.vdpUrl,
                milesFromUs: vehicle.distance
            }
        });

        return {
            found,
            description
        }
    } catch (err) {
        console.log(err);
    }
}