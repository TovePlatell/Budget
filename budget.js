var listIncome = [];
var listExpense = [];
var listTotal = [];
var list;


function add(){
 var operator = document.getElementById('operator').value;
 var number = document.getElementById('value').value*1;
 var txt = document.getElementById('description').value;
 var totalBudget = document.getElementById('totalBudget');//value används när det finns input 
 
 
 var div; // variabels list and div 


 
 if(operator==='+'){
 list = listIncome;
 div = document.getElementById("income");
 
 listTotal.push(Number(number)); //konverterar om det till number med Number

 } // if its an income put in this field 
 
 else{
 list = listExpense;
 div = document.getElementById("expense");
 listTotal.push(Number(-number)); //konverterar om det till number med Number
 
 } // if not take it as an expense 
 //totalBudget(listIncome, listExpense)



var total = 0;  //totalen måste vara nollställd pga den ska kunna räkna det vi skriver in i input 

for (var i = 0; i < listTotal.length; i++){
    total += listTotal[i]; //total är 0 + 0 = det talet som finns i index


}
totalBudget.innerText = total //uträkningen kommer att synas på html under "totalbudget"

console.log(listTotal)

 
 
 list.push({num: number, text: txt});
 div.innerHTML="";
 for(var i = 0; i < list.length; i++){
 div.innerHTML += list[i].text+ " ";
 div.innerHTML += list[i].num+ " <br>";
  }  //the list to see both income and expense   
  console.log(list.length)


  

  function clear(){

    location.reload()

   /*  console.log("hej")
    list = [] */ } 
    
  var clearButton = document.querySelector("#clear")
  console.log(clearButton)

  clearButton.addEventListener("click", clear);

    /*document.getElementById('income').value=''}
    console.log(clear) //the clear button that dosent work ? */
 
}



