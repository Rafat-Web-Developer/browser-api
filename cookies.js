const getCookies = document.cookie;
console.log(getCookies);

const convertedArray = getCookies.split('; ');
console.log(convertedArray);

const getFinalArray = convertedArray.map(singleItem => singleItem.split('='));
console.log(getFinalArray);

const result = getFinalArray.find(singleItem => singleItem.includes('tz'));
console.log(result);