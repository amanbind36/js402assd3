const strings = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "pear",
    "apple",
  ];
function uniq(str){
    obj={}
    str.reduce(function(acc,char) {
        if (obj[char] === undefined) {
          obj[char] = 1;
        } else {
          obj[char] += 1;
        }
      },0);
    console.log(obj)
}  

uniq(strings)