function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
  }
  
  
  const numbers = [1, 2, 3, 4];
  const doubled = customMap(numbers, x => x * 2);
  console.log(doubled); // Output: [2, 4, 6, 8]
  
  function customFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        result.push(array[i]);
      }
    }
    return result;
  }
  
  
  const numbers1 = [1, 2, 3, 4];
  const evens = customFilter(numbers1, x => x % 2 === 0);
  console.log(evens); // Output: [2, 4]
  
  function customReduce(array, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
  
    for (let i = startIndex; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
  }
  

  const numbers2 = [1, 2, 3, 4];
  const sum = customReduce(numbers2, (acc, cur) => acc + cur, 0);
  console.log(sum); // Output: 10
  