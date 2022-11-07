
// getting details and adding on localstorage
function getdetail(event)
{ 
   var price = document.getElementById("price").value 
    let description = document.getElementById('description').value 
    let category = document.getElementById('category').value 
    let email = document.getElementById('email').value 

    event.preventDefault()
    console.log(price)
    console.log(description)
    console.log(category)
    console.log(email)

    let objOfItems = {
        price,
        email,
        description,
        category
    }

    localStorage.setItem(objOfItems.email, JSON.stringify(objOfItems))
    
   

    displayUserOnScreen(objOfItems)
}

//after refreshing the page userdetail show on screen 

window.addEventListener("DOMContentLoaded", () => {
    let localStorageDetails = localStorage;
    let localStorageKeys = Object.keys(localStorageDetails)

    for(var i = 0; i<localStorageKeys.length; i++){
        let key = localStorageKeys[i]
        let detailsInString = localStorageDetails[key];
        let detailsInObject = JSON.parse(detailsInString);
        displayUserOnScreen(detailsInObject)
    }
})

// displayfunction add items in  screen
function displayUserOnScreen(detailsOfUsers){
     document.getElementById("price").value  =""
     document.getElementById('description').value = ""
     document.getElementById('category').value = ""
     document.getElementById('email').value = ""
 
    if(localStorage.getItem(detailsOfUsers.email) !== null){
        removeItemFromDisplay(detailsOfUsers.email)
    }

    let ul = document.getElementById('itemlist')
    let li = `<li id = '${detailsOfUsers.email}'>${detailsOfUsers.price} - ${detailsOfUsers.description} - ${detailsOfUsers.category}
     <button onclick = "removeItem('${detailsOfUsers.email}')" class = "delete">Delete</button>
     <button onclick = "editItem('${detailsOfUsers.price}','${detailsOfUsers.email}','${detailsOfUsers.description}','${detailsOfUsers.category}')" class = "edit">Edit</button></li>`;

    ul.innerHTML =  ul.innerHTML + li

    // ul.append(li);
}


//Removing items from local storage
function removeItem(email){
console.log(email)
localStorage.removeItem(email);
removeItemFromDisplay(email)
}

// delete btn function
function removeItemFromDisplay(email){
    
  let grabbingUl = document.getElementById('itemlist')
 let grabbingList = document.getElementById(email)
   if(grabbingList){
        grabbingUl.removeChild(grabbingList);
   }
}

//edit button function
function editItem(price,email,description,category){
    document.getElementById('email').value = email
    document.getElementById('price').value = price
    document.getElementById('description').value = description
    document.getElementById('category').value = category

    removeItem(email);


}