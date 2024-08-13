// calculate radius in miles from zipcode
function calcDistance(lat1, lon1, lat2, lon2) {
    // use Haversine formula
    const rad = (x) => x * Math.PI / 180;
    const Earth = 3958.8;
    const dLat = rad(lat2-lat1);
    const dLon = rad(lon2 - lon1);
    // dif between lat & long of the two points
    const difference = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
    // angular distance in radians between the 2 pts
    // uses arctangent function `atan2` to determine angle from distance val
    const distance = 2 * Math.atan2(Math.sqrt(difference), Math.sqrt(1 - difference));
    return Earth * distance;
}