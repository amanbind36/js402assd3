const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];

function divide(num){
    let res=num.reduce(function(acc,el){
        if(el%3==0 || el%5==0){
            return acc+=el
        }
       return acc;
    },0)
        console.log(res)
    
}
divide(numbers)