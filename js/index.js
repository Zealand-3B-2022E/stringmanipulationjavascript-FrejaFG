//Write your Javascript code here
console.log("Shoppinglist")

console.log("String mainpulation")

// Add eventlistener by the button
// tell it to execute the function addIputText on a click event
document.getElementById("submitBtn").addEventListener("click",addInputText)

// Fint the text intput field in the html
let elementInput = document.getElementById("input")

// Find the select element i the html
let selectInputUpLow = document.getElementById("UpLow")

// Counter for clicks
let clicked=0

// adds the input text in upper og lower case to the list

function addInputText()
{
    clicked++

    // get the text input
    let inputText = (elementInput).value

    // get the value from the input selected above
    let UpLow = (selectInputUpLow).value

    let result = ""

    // test value og selectInput element
    if(UpLow=="upper")
        result = inputText.toUpperCase()
    else if (UpLow=="lower")
        result = inputText.toLowerCase()
    else
        result = inputText.replace("Buy a new plant")


    // fint the list to add element to
    let listResult = document.getElementById("string manipulating")

    // create new li element
    let newLi = document.createElement("li")
    let newText = document.createTextNode(clicked.toString() + "" + result)
    newLi.appendChild(newText)

    // set attribute of li element
    if (isEven(clicked))
        newLi.setAttribute("class", "even")
    else 
        newLi.setAttribute("class", "odd")

    // add li element to the list
    listResult.appendChild(newLi)

    // Clear input field
    (elementInput).value = ""

}

// test number
function isEven(nr)
{
    if (nr%2==0)
        return true
    
    return false
}