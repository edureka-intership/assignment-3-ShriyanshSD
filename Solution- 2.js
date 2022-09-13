// Solution - 3

const orderData = {
  'Below 500': 20,
  '500-1000': 29,
  '1000-1500': 30,
  '1500-2000': 44,
  'Above 2000': 76
};

// a) 
const total = Object.values(orderData).reduce((prev, next) => prev + next, 0); 
console.log("Total number of orders placed = " + total) // Calculating the total of all key values 

// b) 
const headers = Object.keys(orderData).length;
console.log("Total number of order proportions = " + headers);  // Computing all keys of the Object

//c) 
const response = Object.keys(orderData).map((keys, index) => ({
    'id': index + 1,
    'restaurant': 'Punjabi Tadka',
    'order': keys,
    'order percentage': (100 * orderData[keys] / total).toFixed(2)
  }));

console.log(response)
