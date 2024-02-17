const arr = [
    {
        "name": "Petals of roses",
        "image": "https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "name": "Sunset Horizon",
        "image": "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "name": "Mystic Waterfall",
        "image": "https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "name": "Golden Fields",
        "image": "https://images.pexels.com/photos/1200444/pexels-photo-1200444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "name": "Starlit Sky",
        "image": "https://images.pexels.com/photos/1058341/pexels-photo-1058341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "name": "Ocean Waves",
        "image": "https://images.pexels.com/photos/635372/pexels-photo-635372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "name": "Garden",
        "image": "https://images.pexels.com/photos/20161587/pexels-photo-20161587/free-photo-of-aerial-view-of-a-farm-with-green-fields.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    
]


function showTheCards(){
    var clutter= "";
    arr.forEach(function(obj){
       
        clutter +=`<div class="box">
        <img class ="cursor-pointer" src="${obj.image}">
        <div class ="caption"></div>
        </div>`
    })

    document.querySelector(".container")
    .innerHTML=clutter
}

function handleSearchFunctionality(){

    var input =  document.querySelector("#searchinput")

    input.addEventListener("focus",function(){
        document.querySelector(".overlay")
    .style.display="block"
    })
    input.addEventListener("blur",function(){
        document.querySelector(".overlay")
    .style.display="none"
    })
    input
    .addEventListener("input", function(){
    const filteredArray = arr.filter(obj=>obj.name.toLowerCase().includes(input.value));
    var clutter=""
    filteredArray.forEach(function(obj){
       
        clutter +=`<div class="box">
        <img class ="cursor-pointer" src="${obj.image}">
        <div class ="caption"></div>
        </div>`
    })
    document.querySelector(".searchdata").style.display="block"
    document.querySelector(".searchdata").innerHTML=clutter
    })
}

showTheCards();

handleSearchFunctionality();