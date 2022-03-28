
/**** CURRENT BUGS:        
 * The value of 
 * 
 * 
 * 
 * 
 * 
 * 
 */


//Declaring all my values that will be used as variables 

let dollarAmounts = {
    "twenty-bill": 20, "ten-bill": 10 , "five-bill":5, "one-bill": 1, "quarter":25 , "dime":10, "nickel":5, "penny":1
}

let changeOwed = 0;

let twentyBills = 0;
let tenBills =0;
let fiveBills =0;
let twoBills=0;
let oneBills = 0;
let quarterCoins =0;
let dimeCoins =0;
let nickelCoins=0;
let pennyCoins=0;


function calculate(due, paid){
    
    
    if(paid >= due){
            changeOwed = paid - due;
            theirAmount = paid - due;

    }
    if(changeOwed >= 20){

        while(changeOwed >= 20){
            twentyBills++;
            changeOwed -= 20;
        }

    }
    if(changeOwed >= 10){

        while(changeOwed >= 10){
            tenBills++;
            changeOwed -= 10;
        }

    }
    if(changeOwed >= 5){
        while(changeOwed >= 5){
            fiveBills++;
            changeOwed -= 5;
        }
    }
    if(changeOwed >=2){
        while(changeOwed >= 2){
            twoBills++;
            changeOwed -= 2;
        }
    }
    if(changeOwed >= 1){
        while(changeOwed >= 1){
            oneBills++;
            changeOwed -= 1;
        }
    }
    if(changeOwed >= 0.25){
        while(changeOwed >= 0.25){
            quarterCoins++;
            changeOwed -= 0.25;
        }
    }
    if(changeOwed >= 0.10){
        while(changeOwed >= 0.10){
            dimeCoins++;
            changeOwed -= 0.10;
        }
    }
    if(changeOwed >= 0.05){
        while(changeOwed >= 0.05){
            nickelCoins++;
            changeOwed -= 0.05;
        }
    }
    changeOwed = changeOwed.toFixed(2);
    if(changeOwed > 0.00){
        console.log(changeOwed);
        while(changeOwed > 0.00){
            pennyCoins++;
            changeOwed -= 0.01;
            
        }
    }
    if(paid < due){
        changeOwed = due - paid;
        document.getElementById("no-change").innerHTML = changeOwed;
    }
    document.getElementById("dollars-output").innerHTML = Math.floor(theirAmount);
    document.getElementById("20-dollars-output").innerHTML = twentyBills;
    document.getElementById("10-dollars-output").innerHTML = tenBills;
    document.getElementById("5-dollars-output").innerHTML = fiveBills;
    document.getElementById("2-dollar-output").innerHTML = twoBills;
    document.getElementById("one-dollar-output").innerHTML= oneBills;
    document.getElementById("quarters-output").innerHTML= quarterCoins;
    document.getElementById("dimes-output").innerHTML= dimeCoins;
    document.getElementById("nickels-output").innerHTML= nickelCoins;
    document.getElementById("pennies-output").innerHTML=pennyCoins;

   /* console.log("twenties" ,twentyBills);
    console.log("tens" ,tenBills);
    console.log("fives" ,fiveBills);
    console.log( "ones" ,oneBills);
    console.log("quarters", quarterCoins);
    console.log("dimes" , dimeCoins);
    console.log("nickels" ,nickelCoins);
    console.log("pennies" ,pennyCoins); */

    
}




function handleClickEvent(e){
    let amountDue = parseFloat(document.getElementById("amount-due").value);
let amountPaid =  parseFloat(document.getElementById("amount-received").value);  
   calculate(amountDue, amountPaid);
   

}


/***  ALL OLD CODE (tried using if/else method--FAIL) **/

//function calculate(due, paid){


    /* This if statement will run only if the amount the user paid is EQUAL to the amount that is due, OR, if the 
    amount paid is less than the amount that is due. */
    
      //  if(paid == due || paid < due){
    
   // If paid is less than amount due, this additional if statement will run, which will show "You owe!" and a zero value 
    
           // if(paid < due){
    
             //  document.getElementById("dollar-amount").innerHTML = 0;
           //   document.getElementById("no-change").innerHTML = "You owe!";
    
    //If paid is NOT less than dollar amount, but still equal to what's due, this else statement will show "No change due!"
    
    
         //  }else{
    
        //        document.getElementById("dollar-amount").innerHTML = 0;
       //         document.getElementById("no-change").innerHTML = "No change due!";
    
          //  }
    
    
     //   }else 
        
        // This will run if the amount user inputted for paid is greater than or equal to one, and is a whole number only.
    
       //     if (paid >= 1 && paid % 1 == 0){
         //paid-=due;
         //dollarAmount = paid;   
    
       // }else 
    
        // This will run if the amount user inputted for paid is NOT a whole number 'a decimal/float' OR less than one.  
    
         //   if(paid % 1 != 0 || paid > 1){
            
        // This will run IF the amount that the user paid is divisible by .25 'a quarter' upon passing the parenting if condition.
    
           //     if(paid % .25 == 0){
    
    
                    /* This for loop will run until 'paid' is zero, subtracting .25 'cents' for everyloop, starting with the initial amount,
                    and will only run opon passing conditions of the parent statement */
    
            /*        for(i = paid; i > 0; i - .25){
                        quarterAmount++;
                    }
    
                    console.log(quarterAmount);
    
            
                }else if(paid % .25 != 0 && paid > .25){
    
                    quarterAmount = Math.round(paid /= .25);
    
                    document.getElementById("quarters-output").innerHTML = quarterAmount;
    
                }
            }
            
            
            
    
            /*for(i = paid; i > 0.99 ; i--){
               
                
                dollarAmount-= i;
                Math.abs(dollarAmount);
                console.log(dollarAmount);
                dollarAmount -= paid;
    
            }*/
         /*   console.log(dollarAmount);
    
            if(paid < 1){
                if(paid % 25 ==0)
                    for(i = paid; i > 0; i- 25){
                    quarterAmount++;
                    console.log(quarterAmount);
                }
            }
        }
    */