var prudectNameInput = document.getElementById("prodName");
var prudectCatuoryInput = document.getElementById("catuory")

var prudectsList = []
if (localStorage.getItem("prodects") != null) {
    prudectsList = JSON.parse(localStorage.getItem("prodects"))
    displayProdects()
}


function getInputs() {
   if(valt ()&& url()){
    var prudects = {
        name: prudectNameInput.value,
        catuory: prudectCatuoryInput.value,


    }
    console.log(prudects)
    prudectsList.push(prudects);
    localStorage.setItem("prodects", JSON.stringify(prudectsList))
    displayProdects()
    clearForm()
    prudectNameInput.classList.remove( "is-valid")
    prudectCatuoryInput.classList.remove( "is-valid")

}else{
    document.getElementById("modal").click();

}


}
function clearForm(){
    prudectNameInput.value="";
    prudectCatuoryInput.value="";

}

function displayProdects() {
    var cartona = ``;
    for (var i = 0; i < prudectsList.length; i++) {
        cartona += `
        <tr>
           <td>${i + 1}</td>
           <td>${prudectsList[i].name}</td>
           <td><a href="${prudectsList[i].catuory}" target="_blank"><button class="btn btn-danger"><i class="fa-solid fa-eye"></i>  visit</button></a></td>

           <td><button  onclick="deleteItem(${i}) "   class="btn btn-success"><i class="fa-solid fa-trash"></i> delete</button></td>

         </tr>

        `
    }
    document.getElementById("tBody").innerHTML = cartona;

}

function deleteItem(index) {
    prudectsList.splice(index, 1);
    localStorage.setItem("prodects", JSON.stringify(prudectsList))
    displayProdects()


}
 var messege=document.getElementById("massege")

function valt (){
    var text=prudectNameInput.value;
    var ragex=/^[A-Za-z0-9]{3,8}$/;
    if(ragex.test(text)){
           prudectNameInput.classList.add( "is-valid")
           prudectNameInput.classList.remove( "is-invalid")
           messege.classList.add("d-none")

           return true ;
           
    }else{
        prudectNameInput.classList.add( "is-invalid")
        prudectNameInput.classList.remove( "is-valid")
        messege.classList.remove("d-none")
        return false ;

    }

}

var messegeurl=document.getElementById("massegeurl")

function url(){
    var text=prudectCatuoryInput.value;
    var ragex=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    if(ragex.test(text)){
           prudectCatuoryInput.classList.add( "is-valid")
           prudectCatuoryInput.classList.remove( "is-invalid")
           messegeurl.classList.add("d-none")

           return true ;
           
    }else{
        prudectCatuoryInput.classList.add( "is-invalid")
        prudectCatuoryInput.classList.remove( "is-valid")
       messegeurl.classList.remove("d-none")
        return false ;

    }

}






























// var prudectNameInput = document.getElementById("prodName");
// var prudectCatuorymeInput = document.getElementById("catuory");
// var prudectPriceInput = document.getElementById("prodPrice");
// var prudectDescInput = document.getElementById("prodDesc");
// var productList = [];
// if(localStorage.getItem("prudects") != null){
//     productList=JSON.parse(localStorage.getItem("prudects"));
//  displayProdects();
// }

// function getInputs() {

//     var product = {
//         name: prudectNameInput.value,
//         catuory: prudectCatuorymeInput.value,

//         price: prudectPriceInput.value,

//         desc: prudectDescInput.value

//     }
//     productList.push(product);
//     localStorage.setItem("prudects",JSON.stringify(productList))
//     displayProdects()

// }

// function displayProdects() {
//     var cartona = ``
//     for (var i = 0; i < productList.length; i++) {
//         cartona += `
//         <tr>
//         <td>${[i]}</td>
//         <td>${productList[i].name}</td>
//         <td>${productList[i].catuory}</td>
//         <td>${productList[i].price}</td>
//         <td>${productList[i].desc}</td>
//         <td> <button class="btn btn-success">delete</button>
//         </td>
//         <td> <button class="btn btn-danger ">update</button>
//         </td>
//      </tr>
//     `
//     }
//     document.getElementById("tBody").innerHTML = cartona;

// }
