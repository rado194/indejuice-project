// --------------- Fruit Object -------------------

var fruits = [
    { 
        name: "Mangoes",
        country: "from India",
        description: "A mango is a juicy stone fruit (drupe) produced from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit." , 
        price: 0.50,
        image: "img/mangoes.png"
    },
    {
        name: "Strawberries", 
        country: "from Spain",
        description: "This fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness. It is consumed in large quantities and popular in jam, juice, pies & ice cream." , 
        price: 0.20,
        image: "img/strawberries.png"
    },  
    {
        name: "Guavas",
        country: "from Guatemala",
        description: "Guavas are common tropical fruit cultivated in many tropical and subtropical regions, originating from an area thought to extend from Mexico or Central America." , 
        price: 0.40,
        image: "img/guavas.png"
    }
];



// ------------------- Functions ------------------------

function closeModal(event) {
    var modal = document.getElementsByClassName("modal");
    modal[0].style.display = "none";
}

function modalHandler(event) {
    var element = event.target.closest('.parent');
    var fruitIndex = element.id;
    var modal = document.getElementsByClassName("modal");
    var h2s = document.getElementById("fruit-title");
    h2s.innerHTML = fruits[fruitIndex].name;
    modal[0].style.display = "block";
}

function displayList() {
    var items = document.getElementById("items");
    //Create Grid container
    for (i=0; i < fruits.length; i++) {
        var fruit = fruits[i];
        var gridContainer = document.createElement("div");
        gridContainer.classList.add("grid-container");
        gridContainer.classList.add("parent");
        

        gridContainer.id = i;
        gridContainer.onclick = function(event) {modalHandler(event)};


        var imageContainer = document.createElement("div");
        imageContainer.classList.add("image-column");
        imageContainer.innerHTML = "<img src='"+fruit.image+"'>";

        var contentColumn = document.createElement("div");
        contentColumn.classList.add("content-column");
        contentColumn.classList.add("grid-container");
        
        contentColumn.innerHTML =  '<div id="item-title" class="grid-container"><p id="item-name">'+fruit.name+' <span id="item-country">'+fruit.country+'</span></p><div id="item-price"><p id="item-pennies">£'+fruit.price+' <span id="item-each">each</span></p></div></div><div id ="item-description"><p>'+fruit.description+'</p></div>';

        gridContainer.appendChild(imageContainer);
        gridContainer.appendChild(contentColumn);
        items.appendChild(gridContainer);
    } 
}