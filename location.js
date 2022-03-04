// const location = window.location;
const getLocation = location;

console.log(getLocation);
console.log(`Hash = ${getLocation.hash || null}`);
console.log(`Host = ${getLocation.host || null}`);
console.log(`Host name = ${getLocation.hostname || null}`);
console.log(`Href = ${getLocation.href || null}`);
console.log(`Origin = ${getLocation.origin || null}`);
console.log(`Path name = ${getLocation.pathname || null}`);
console.log(`Port = ${getLocation.port || null}`);
console.log(`Protocol = ${getLocation.protocol || null}`);
