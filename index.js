document.getElementById("form").addEventListener("submit", (event)=>{
    event.preventDefault();
})


const loadAllPhone = async(status, brandName) =>{
    console.log(brandName);
    document.getElementById("snipperAnime").classList.add("hidden");
    
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${brandName ? brandName : "iphone"}`);
    const data = await response.json();
    displayAllPhone(data?.data, status);

}


const displayAllPhone = (phones, status) =>{
    document.getElementById("phones-container").innerHTML = "";
    let arrayLength;
    status ? arrayLength = phones : arrayLength = phones.slice(0, 6);
    const phonesContainer = document.getElementById("phones-container");

    arrayLength.forEach((phone)=>{
        const div = document.createElement("div");
        div.innerHTML = `
        
        <div class="card bg-base-100 w-96 shadow-xl mb-4">
            <figure class="px-10 pt-10">
            <img
                src="${phone.image}"
                alt="phone"
                class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
                <button class="btn bg-blue-500 text-white">View Details</button>
            </div>
            </div>
        </div>

        `;
        phonesContainer.appendChild(div);
    })
}

const handleShowAll = () =>{
    loadAllPhone(true);
}


const handleSearch = () =>{
    const searchPhone = document.getElementById("search").value;

    document.getElementById("snipperAnime").classList.remove("hidden");
    setTimeout(()=>{
        loadAllPhone(false, searchPhone);
    }, 2000);

}

loadAllPhone(false, "iphone");