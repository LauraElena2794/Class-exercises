var variabile_name = 12; //defining a variable with initial value an intiger value
var isLessThan = false;   //defining a boolean variable with initial value false
//it is very important to have an initial value when declaring a variable because if you use it before initialization, you will gen an undefined value

/*if statement - 
if ( condition )
{
    do something
} 
else 
{
    do something
}*/
if( variabile_name < 20 )  //if the condition is true, code will execute everything inside the {}
{
    isLessThan=true;
}
else{                     // else branch is accessed only when the condition from the if is false, code will execude everything inside {}
    isLessThan = false;
}

if(isLessThan == true)     // == is used for equal condition
{
    console.log("Number is less than 20");
}
else{
    console.log("Number is not less than 20");
}

/*   
while ( condition) 
{
    do something
}*/
var indexWhile=1;    //initial value for the variable used inside the condition - very important to know where the loop starts 
var sumWhile=0; 
while(indexWhile<=5)     //everythig will be executed while condition is true
{
    sumWhile=sumWhile+indexWhile;    //new sum = old sum + index
    indexWhile=indexWhile+1;         // increment by one
}
console.log("SumWhile is:"+sumWhile);

var varindexFor = 0;
var sumFor=0;

/*
for ( index = start_value ; index < limit ; index ++ )
{
    do something
}*/ 
for(varindexFor=0; indexFor<=5; indexFor++)      //starting from index 0, execute until condition is not fulfilled anymore, incrementation of the index is done at each step
{
    sumFor = sumFor +indexFor;                  //new sum = old sum + index
}
console.log("SumFor is:"+sumFor);

//i++  <=> i=i+1
//i+2  <=> i=i+2