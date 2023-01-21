function setList () { //fills description and information about the product
    let ulist = document.getElementsByClassName("information");
    let descrlist = document.getElementsByClassName("description");
    for(let x in ulist) {
        for(let i in shoes[x]) {
            if (i == "Description") {
                let text = document.createTextNode(shoes[x][i]);
                descrlist[x].appendChild(text);
            } else {
                let data = document.createElement("li");
                let newContent = document.createTextNode(i + ": "+ shoes[x][i]);
                data.appendChild(newContent);
                ulist[x].appendChild(data);
            }
        }
    }
}


window.addEventListener('DOMContentLoaded', (event) => {
    setList();
    
    //add event listeners on product images
    let shoe_img = document.getElementsByClassName("prod_img");
    for (let shoe of shoe_img) {
        shoe.addEventListener("click", updateCart);
    }
    //add to cart array on clicking the product picture
    var shopping_cart_orders = [];
    var shopping_cart = document.getElementById("shopping_cart");
    function updateCart () {
        //check which shoes beign clicked and add +1 to cart (located in shoes_data.js)
        for (let x in shoes) {
            if(this.alt == x[0]) {
                x[4]++;
            }
        }

        
    
        if(shopping_cart_orders.length == 1) {
            shopping_cart.innerHTML = "Shopping Cart: " + shopping_cart_orders.length + " item";
        } else {
            shopping_cart.innerHTML = "Shopping Cart: " + shopping_cart_orders.length + " items";
        }

        

    }





    //show / hide shopping cart button
    shopping_cart.addEventListener("click", showCart);
    function showCart() {
        let cart = document.getElementById("cart_list");
        if (cart.style.display == "none") cart.style.display = "block";
        else if (cart.style.display == "block") cart.style.display = "none";
    }
    

    //data validation on age input form
    var age = document.getElementById("age");
    age.addEventListener("change", validation);
    function validation () {
        let text = document.getElementById("valid_not");
        if (parseInt(age.value) <= 5) {
            age.style.border = "1px solid red";
            text.innerHTML = age.value + " is not a valid age";
            text.style.color = "red";
            age.value = "";
        } else {
            age.style.removeProperty("border");
            text.innerHTML = " ";

        }
    }


    



    
    

});