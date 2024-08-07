const numbers = [1, 2, 3, 4, 5, 7];

function odd(num){
    let res=num.filter(function(el){
        return 2*(el%2==1)
    })
    .map(function(el){
        return el*el
    }).reduce(function(acc,el){
        return acc+el
    },0)
    console.log(res)
}
odd(numbers)