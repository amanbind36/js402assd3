function customSlice(arr, start, end) {
    const result = [];
    for (let i = start; i < (end || arr.length); i++) {
      if (i < arr.length) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  function customSplice(arr, start, deleteCount, ...items) {
    const result = arr.slice();
    result.splice(start, deleteCount, ...items);
    return result;
  }
  
  function customPush(arr, ...items) {
    return arr.concat(items).length;
  }
  
  function customPop(arr) {
    if (arr.length === 0) return undefined;
    return arr[arr.length-1];
  }
  
  function customMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
  }
  
  function customFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  function customReduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    for (let i = initialValue !== undefined ? 0 : 1; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
  }
  
 
  const arr = [1, 2, 3, 4, 5];
  
  console.log(customSlice(arr, 1, 3)); // Output: [2, 3]
  console.log(customSplice(arr, 2, 0, 6)); // Output: [1, 2, 6, 3, 4, 5]
  console.log(customPush(arr, 6, 7)); // Output: 7 (new length of the array)
  console.log(customPop(arr)); // Output: [1, 2, 3, 4] (array without the last element)
  
  console.log(customMap(arr, x => x * 2)); // Output: [2, 4, 6, 8, 10]
  console.log(customFilter(arr, x => x % 2 === 0)); // Output: [2, 4]
  console.log(customReduce(arr, (acc, cur) => acc + cur, 0)); // Output: 15
  