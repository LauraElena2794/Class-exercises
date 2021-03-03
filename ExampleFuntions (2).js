var avg = 0;
/*function FunctionName( parameter1, parameter2 )    - parameters are not mandatory, they are used when you need to use values from outside the function - ex. Calulating a sum, calculating the end grade for a student ...
{
    //function body - do something
}*/
function Sum(nr1,nr2)    //function Sum requests 2 parameters dar are used to calculate a sum. 
{
    var sum = 0;    //yemporary variable used only inside the funtion for intermediate calculations
    sum= nr1+nr2;
    console.log("Sum for " + nr1 + " and " + nr2 + " is: " + sum);   //Returns a concatenation of strings
    console.log("Sum is "+ nr1 + nr2);   //in this case, nr1 and nr2 are considered strings so it will not calculate the sum, but it will concatenate the 2
    console.log(nr1+nr2);   //in this case, since there is no string involved, this will calculate the correct sum
}

function ReturnAvg(nr1,nr2)  //function requests 2 parameters and as output it will return the avg. For these types of functions, in order to use the value that it returns, you will need to "catch" the value
{
    var sum = nr1+nr2;
    return sum/2;
}

function AppyTax(val)
{
    console.log(val+val*0.08);
}
//calling a function:   FuntionName(parameter1,parameter2);  - parameters are used only when they were declared in the function declaration. The call should have the same number of parameters
Sum(2,3);   // for functions that do not have a return, they can be called "simple"
avg = ReturnAvg(2 ,3);   //here we store the value that the function returns for later use
console.log("Avg is: "+avg);

AppyTax(ReturnAvg(10 ,20));   //if a function returns something, that value can be later used as a parameter to another function without storing that value inside a variable, but by calling the function as a parameter