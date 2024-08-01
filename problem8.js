
// Input
const expenses = [
    { name: "Food", amount: 50 },
    { name: "Transportation", amount: 30 },
    { name: "Internet", amount: 45 },
    { name: "Groceries", amount: 80 }
  ];
  
  function calculateTotalExpenses(expenses){
    var sum =expenses.reduce(function(acc,ele){
        return acc+ele.amount
    },0)
    return sum;
  }


  // Output
  const totalExpenses = calculateTotalExpenses(expenses);
  console.log(totalExpenses); // Output should be: 205
  
  