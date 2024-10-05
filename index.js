document.getElementById("form").addEventListener("submit", (event)=>{
    event.preventDefault();
})


const loadAllPhone = async(status) =>{
    document.getElementById("snipperAnime").classList.add("hidden");
    
    const response = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await response.json();
    displayAllPhone(data?.data, status);

}


const displayAllPhone = (phones, status) =>{
    if(status){
        console.log(phones);
        
    }else {
        console.log(phones.slice(0, 6));
    }

}

const handleShowAll = () =>{
    loadAllPhone(true);
}

const handleSearch = () =>{
    document.getElementById("snipperAnime").classList.remove("hidden");
    setTimeout(()=>{
        loadAllPhone();
    }, 2000);

}

loadAllPhone();