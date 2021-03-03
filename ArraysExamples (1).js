//this function requests an array that will be parsed
function GetMAx(arr){
    var max=0;
   for(var i=0;i<arr.length;i++)    //to parse an array you need to use an index that specifies the possition inside the array
   //array.length returns the length of the array (number of values stored)
   //index starts from 0 and ends at array.length-1
   //ex. array = [7,5,9];   array[0]=7, array[1]=5, array[2]=9   
   //accessing a value from a specific possition in the array: array[]
   {
       if(arr[i]>max)     
       {
           max=arr[i];
       }
   } 
   console.log("Maximum is: " + max);
}
var arr = [2,7,8,1,10,4];  //how to define and initialize an array
GetMAx(arr);