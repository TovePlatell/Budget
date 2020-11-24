
// 3 arrays for income, expense, total = för att kunna skapa funktion/object

var listIncome = []; 
var listExpense = [];
var listTotal = [];

var list; // 

//create a function 
function add(){
 var operator = document.getElementById('operator').value;
 var number = document.getElementById('value').value*1;
 var txt = document.getElementById('description').value;
 var totalBudget = document.getElementById('totalBudget');//value används när det finns input 
 
// if statements

 if (operator === '+') {
  list = listIncome;
  
  var li = document.createElement("li"); // create li element
  
  li.innerText = txt + " : " + number;
  
  var ul = document.querySelector(".incomeList") // choose element in html
  
  ul.appendChild(li);
 
  listTotal.push(Number(number)); // converts to number 
  
  }

  else {
    list = listExpense;
    
    var li = document.createElement("li"); 
    
    li.innerText = txt + " : " + number; // add lists/data 
    
    var ul = document.querySelector(".expenseList") 
    
    ul.appendChild(li); // add elements li/ul 
    
    listTotal.push(Number(-number)); 
    
    }
 

var total = 0;  // totalen måste vara nollställd pga den ska kunna räkna det vi skriver in i input 

for (var i = 0; i < listTotal.length; i++){
    total += listTotal[i]; //total är 0 + 0 = det talet som finns i index

}
totalBudget.innerText = total //uträkningen kommer att synas på html under "totalbudget"

  function clear(){

    location.reload()

   /*  console.log("hej")
    list = [] */ } 
    
  var clearButton = document.querySelector("#clear")
  console.log(clearButton)

  clearButton.addEventListener("click", clear); // ropa på funktionen

 
}


function addDelete(event){
  var deleteDiv = document.createElement("div");
  deleteDiv.classList.delete("delete");


}

 /*document.getElementById('income').value=''}
    console.log(clear) //the clear button that dosent work ? */

/* list.push({num: number, text: txt});
li.innerText="";
 for(var i = 0; i < list.length; i++){
 li.innerText += list[i].text+ " : ";
li.innerText += list[i].num+ " \n ";
  }  //the list to see both income and expense   
  console.log(list.length) */


