//fills description and information about the product
function setList () { 
    let ulist = document.getElementsByClassName("information");
    let descrlist = document.getElementsByClassName("description");
    for(let x in ulist) {
        for(let i in shoes[x]) {
            if (i == "Description") {
                let text = document.createTextNode(shoes[x][i]);
                descrlist[x].appendChild(text);
            } else if (i == "Cart") {
                continue;
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
    var cart_list = document.getElementById("cart_list");
    var shop_text = document.getElementById("shop_text");
    function updateCart () {

        cart_list.innerHTML = ""; //clear ol first

        //check which shoes beign clicked and add +1 to cart (located in shoes_data.js)
        for (let x in shoes) {
            if(this.alt == shoes[x]["Name"]) {
                shoes[x]["Cart"]++;
                break;
            }
        }

        let count = 0; // amount of total added orders

        for (let x in shoes) { //display separate items with number chosen
            if (shoes[x]["Cart"] > 0) {
                let item = document.createElement("li");
                item.innerHTML = shoes[x]["Name"] + ": " + shoes[x]["Cart"];
                cart_list.append(item);
                count += shoes[x]["Cart"];
            }
        }

        //add Total and Clear button as last <li>
        let item = document.createElement("li");
        item.innerHTML = "Total: " + count + " item/s";
        cart_list.append(item);
        let item_2 = document.createElement("li");
        item_2.innerHTML = "Clear the shopping cart.";
        item_2.setAttribute("id", "delete");
        cart_list.append(item_2);

        //add delete functionality
        let delete_b = document.getElementById("delete");
        delete_b.addEventListener("click", deleteButton);

        if (count > 0) {
            shop_text.style.fontWeight = "bold";
        }

    }

    function deleteButton () {
        for (let x in shoes) {
            shoes[x]["Cart"] = 0;
        }
        updateCart();
        shop_text.style.fontWeight = "normal";
    }

    //show / hide shopping cart button
    document.getElementById("shop_text").addEventListener("click", showCart);
    function showCart() {
        let cart = document.getElementById("cart_list");
        if (cart.style.display == "none") {
            cart.style.display = "block";
            shop_text.innerHTML = "Shopping Cart \\/";
        } else if (cart.style.display == "block") { 
            cart.style.display = "none";
            shop_text.innerHTML = "Shopping Cart >>";
        }
        updateCart();
    }

    //data validation on age input form
    var age = document.getElementById("age");
    age.addEventListener("change", validation);
    var text = document.getElementById("valid_not");
    function validation () {
        if (parseInt(age.value) <= 5 || parseInt(age.value) >= 100) {
            age.style.border = "1px solid red";
            text.innerHTML = age.value + " is not a valid age";
            text.style.color = "red";
            age.value = "";
        } else {
            age.style.removeProperty("border");
            text.innerHTML = " ";
            age.value = Math.ceil(age.value);
        }
    }

    //hide on subscribing JQuery use
    var submit_b = document.getElementById("form");
    submit_b.addEventListener("submit", submitMessage);

    $(document).ready(function() {
        $("#suc_subscr").hide();
    });

    function submitMessage() {
        $("#suc_subscr").show();
        $("#subscribe").hide();
    }

});