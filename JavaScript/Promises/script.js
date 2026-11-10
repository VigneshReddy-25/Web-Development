let refElem = document.getElementById("ref")
async function fetchAPIData() {
    try{
        let api = "https://fakestoreapi.com/products/"
        let res = await fetch(api)
        let data = await res.json()
        console.log(data)
        setTimeout(() => display(data), 2000);
    }
    catch(error){
        alert("Something went wrong, please try again later.")
    }
}

function display(d){
    let cards = "";
    
    for(let i in d){
        cards +=
        `<div class="card">
            <img src="${d[i].image}" alt="product image" class="card-img">
            <h3 class="card-title">${d[i].title}</h3>
            <p class="card-price">Price: $${d[i].price}</p>
        </div>`
    }
    refElem.innerHTML = cards;

}