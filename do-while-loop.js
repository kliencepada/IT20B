/*
i = 1;

do{
    console.log(i);
    i++;
}while (i<=5);
*/
/*
i = 5;

do{
    console.log(i);
    i--;
}while (i>=1);
*/

arr1 = [4,2,3];
function arrDoWhile(arr){
output = "";

i = 0;
do{
    output += arr[i] + " ";
    i++;
} while(i < arr.length);

arrDoWhile(arr1);
}
