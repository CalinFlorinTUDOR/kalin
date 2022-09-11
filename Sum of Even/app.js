function fun(n)  
  {  
    let i = 0; 
    sum = 0;  
    for (i = 2; i <= n; i += 2) {  
          sum += i;  
        }  
        return sum;  
  }
    
  let n = prompt("Print any number: ");  
  document.write("Sum of all even numbers from 1 to " + n + " is: " + fun(n));
  
  console.log(fun(n));

