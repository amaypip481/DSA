


  const t0 = performance.now()
// Add function here...
function factorial(n) {
    let num = n
    if (n === 0) return 1
    for (let i = 0; i < n; i++) {
      num = n * factorial(n - 1)
    }
    return num
  }

  factorial(11);
const t1 = performance.now()
console.log("The function took: " + (t1 - t0) + " milliseconds.")