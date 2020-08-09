//1.Sa se faca suma a doua numere
var x = 15;
var y = 20;
var sum = x+y;
console.log(sum);

//2.Se dau doua numere, sa se determine maximul intre ele
if ( x>y){
    console.log ("maximum is " + x);
}
else {
    console.log("maximum is " + y);
}

//3.Sa se afiseze elementele unui array
var A = [1,3,2,25,"ioana"];
console.log (A);
for (var index=0; index<A.length; index++)
{
    console.log(A[index]);
} 

//4.Gasiti cel mai mic numar din array
var B = [75,5,25,10,15,30];
var min = B[0];
for (var index=0; index<B.length; index++)
{
    if (min>B[index])
    {
        min=B[index];
    }
}
console.log("minimum is " + min);

//5.Afisati elementele dintr-o matrice, array de array
var C = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]];
console.log (C);
for (var index1 = 0; index1<C.length;index1++)
{
    console.log(C[index1]);
    for (var index2 = 0; index2<C[index1].length;index2++)
    {
        console.log(C[index1][index2]);
    }
} 

//6.Cautarea unei litere intr-un string
var myString = "Carina merge la cumparaturi.";
var findElement = "r";
var count = 0;
for (var index =0; index<myString.length; index++)
{
    if (myString[index]==findElement)
    {
        count++;
    }
}
console.log("Caracterul \"" + findElement + "\" a fost gasit de " + count + " ori.");

//7.Inlocuirea unei litere dintr-un string
var myString = "Medeea ferge la fare.";
var findElement = "f";
var newString = new String();
var replaceElement = "m";
for (var index =0; index<myString.length; index++)
{
    if (myString[index]==findElement)
    {
        newString[index]=replaceElement;
    }
    else{
        newString[index]=myString[index];
    }
}
console.log(newString);

