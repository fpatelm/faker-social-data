function get() { 
    return Boolean(Math.floor(Math.random() * (1 - 0 + 1)) + 0);
}
 
module.exports = { get };