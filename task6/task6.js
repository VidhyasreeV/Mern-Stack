fetch("https://api.instantwebtools.net/v1/airlines/2")
    .then((res) => res.json())
    .then((data) => console.log(data));

fetch("https://api.instantwebtools.net/v1/airlines/1")
    .then((res) => res.json())
    .then((data) => console.log(data));

fetch("https://api.instantwebtools.net/v1/airlines/3")
    .then((res) => res.json())
    .then((data) => console.log(data));
fetch("https://api.instantwebtools.net/v1/airlines/12")
    .then((res) => res.json())
    .then((data) => console.log(data));
fetch("https://api.instantwebtools.net/v1/airlines/5")
    .then((res) => res.json())
    .then((data) => console.log(data));

/*
const createTodo = async (todo) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "id": 1000000000000,
            "name": "example",
            "country": "ecample country",
            "logo":"djfvihjbnm",
            "slogan": "From example country",
            "head_quaters": "abc,example country",
            "website": "www.examplecountry.com",
            "established": "864564"
        })
    }
    
let p=await fetch("https://api.instantwebtools.net/v1/airlines", options)
let response= await p.json()
return response
}

const mainFunc=async ()=>{
    let todo= await createTodo()
    console.log(todo)
}

mainFunc()
*/

fetch("https://api.instantwebtools.net/v1/airlines/1000000000000")
    .then((response) => response.json())
    .then((json) => console.log(json));

//Read all passengers. 
fetch("https://api.instantwebtools.net/v1/passenger?page=0&size=10")
    .then((res) => res.json())
    .then((data) => console.log(data));
//create passenger


const updatepassenger = async (done) => {
    let option = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "totalPassengers": 6,
            "totalPages": 6,
            "data": [
                {
                    "_id": "5eef7f1bdfaf515ddc9feade",
                    "name": "Saman Jeewantha",
                    "trips": 500,
                    "airline": [
                        {
                            "id": 4,
                            "name": "Emirates",
                            "country": "Dubai",
                            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/150px-Emirates_logo.svg.png",
                            "slogan": "From Dubai to destinations around the world.",
                            "head_quaters": "Garhoud, Dubai, United Arab Emirates",
                            "website": "www.emirates.com/",
                            "established": "1985"
                        }
                    ],
                    "__v": 0
                }
            ]
        })
    }

    //fetch(url,option)
    //.then(response=>console.log(response.status))

    let k = await fetch("https://api.instantwebtools.net/v1/passenger", option)
    let response = await k.json()
    return response
}

const mainFunction = async () => {
    let done = await updatepassenger()
    console.log(done)
}

mainFunction()

fetch("https://api.instantwebtools.net/v1/passenger")
    .then((res) => res.json())
    .then((data) => console.log(data));