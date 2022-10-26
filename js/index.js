//Write your Javascript code here
console.log("Shoppinglist")
let myElement =  document.getElementById("0");
console.log(myElement);

if(myElement.hasAttribute("class"))
{
    console.log("element has class attribute")

    if(myElement.getAttribute("class")=="unhealthy")
    {
        myElement.setAttribute("class","healthy");
    }
}

let myList = document.getElementsByTagName("li"); 

console.log(myList);

console.log("Starts the for loop");
//change the class attribute for all the elements in the loop, from "unhealthy" to "healthy" and virce versa
for (let index = 0; index < myList.length; index++) {
    const element = myList[index];
    console.log(element);
    if(element.hasAttribute("class"))
      {
          if(element.getAttribute("class")=="unhealthy")
          {
              element.setAttribute("class","healthy");
          }
          else
          {
            element.setAttribute("class","unhealthy");
          }
      }
}