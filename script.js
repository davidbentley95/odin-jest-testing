function capitalize(str) {
    if(typeof str !== "string") throw new Error("Must pass a string to this function");

    return str.charAt(0).toUpperCase() + str.slice(1);
}


module.exports = { capitalize };