class podcast{
    constructor(id,name,category,description,img,apple,spotify, rating){
        this.id=id
        this.name=name
        this.category=category
        this.description=description
        this.img=img
        this.apple=apple
        this.spotify=spotify
        this.rating=rating
    }

}

const podcasts= []


let pod1 = new podcast(1,"Kinda Funny Games Daily","technology","The most popular daily video game news podcast has over 800 episodes and is your definitive guide to what’s happening with PlayStation, Xbox, Nintendo, and all of the gaming world. Hosted by Greg “GameOverGreggy” Miller, Tim Gettys, Blessing Adeoye, and Star Wars Rogue One writer Gary Whitta, this is an entertaining podcast that’s also essential listening for gamers.","https://www.digitaltrends.com/wp-content/uploads/2022/08/kinda-funny-games-daily-best-podcasts.jpg?fit=720%2C480&p=1",true,true,7.8)
let pod2 = new podcast(2,"Darknet Diaries","technology","Ever wondered about the dark side of the internet? Darknet Diaries explores the world of hacking, cybercrime, and data breaches. Host Jack Rhysider covers topics ranging from the LinkedIn data breach of 2012 to what happens if you post your boarding pass on Instagram. Most episodes run around an hour in length, providing plenty of time to take a deep dive into the topic after work or while doing the household chores.","https://www.digitaltrends.com/wp-content/uploads/2021/04/darknet-diaries-best-podcasts.jpg?fit=720%2C720&p=1",true,false,8.9)
let pod3 = new podcast(3,"Rocket","technology","This all-female tech podcast is hosted by Mashable senior tech correspondent Christina Warren, tech feminist Brianna Wu, and family gaming and diversity writer Simone de Rochefort — all of whom share extensive knowledge of and enthusiasm for all things geek, from tech and video games to movies and comics. Weekly episodes run between 40 minutes to an hour in length, giving you the perfect excuse to get your geek on in your lunch break or on your commute. Recent episodes we’ve loved include the one about Instagram’s awful updates and the episode about the best new console scam.","https://www.digitaltrends.com/wp-content/uploads/2021/03/rocket-best-podcasts.jpg?fit=720%2C480&p=1",true,false, 7.9)
let pod4 = new podcast(4,"Resistance","news","If you’ve already checked out our pick of podcasts to listen to during Black History Month, you’ll be aware of Resistance already. For those who aren’t, it’s all about refusing to accept things the way they are. Hosted by writer, producer, and poet Saidu Tejan-Thomas Jr., the show focuses on the stories of how Black people fight back and resist, and aims to “bring those stories to the forefront.","https://www.digitaltrends.com/wp-content/uploads/2021/03/resistance-best-podcasts-for-black-history-month.jpg?fit=720%2C480&p=1",false,true,9.3)
let pod5 = new podcast(5,"The Daily","news","If you need to stay up to date on the latest events, The New York Times’ podcast The Daily provides all the news that’s fit to listen to in a tidy format. Twenty minutes a day, five days a week, host Michael Barbaro guides listeners through the biggest news stories of the day, talking to experts and other Times reporters.","https://www.digitaltrends.com/wp-content/uploads/2020/10/best-podcasts-the-daily.jpg?fit=720%2C480&p=1",true,false,7.3)
let pod6 = new podcast(6,"Conan O’Brien Needs a Friendy","comedy","This weekly podcast, hosted by comedian and talk show host Conan O’Brien, sees him hang out with one of his favorite celebrities each week. Topics of conversation range from the humorous to the obscure — don’t miss the episode with John Cleese, or the recent Aubrey Plaza episode.","https://www.digitaltrends.com/wp-content/uploads/2021/05/conan-obrien-needs-a-friend-best-podcasts-2.jpg?fit=720%2C720&p=1",true,true,8.0)
let pod7 = new podcast(7,"Australian True Crime","true crimen","One of the most popular crime podcasts worldwide, Australian True Crime dives deep into the most horrific, mysterious, and disturbing true crime cases to come out of Australia’s suburbs. Hosts Meshel Laurie and Emily Webb interview victims, perpetrators, true crime authors, and those working in crime and punishment to uncover the full story behind each case, bringing a fresh take. There are over 280 episodes to delve into, with new episodes dropping weekly.","https://www.digitaltrends.com/wp-content/uploads/2021/05/australian-true-crime-best-podcasts.jpg?fit=720%2C720&p=1",true,true,7.3)
let pod8 = new podcast(8,"Undisclosed","true crimen","The justice system doesn’t always work, and podcasts like Undisclosed are there to make sure we don’t forget. Undisclosed takes the listener through the investigation, trial, and verdict of controversial cases, such as the death of Freddie Gray, with meticulous detail that makes every episode sound ripe for a multipart TV documentary.","https://www.digitaltrends.com/wp-content/uploads/2020/10/best-podcasts-undisclosed.jpg?fit=720%2C480&p=1",true,false,9.7)
let pod9 = new podcast(9,"The History Chicks","history","Looking for something a little different from history 101? Hosts Beckett Graham and Susan Vollenweider present a different woman  — or women — throughout history in each episode, giving you the facts, as well as how each woman is remembered and how their legacies live on. With episodes around an hour long, this is the perfect after-work podcast when you just want to put your feet up. There are over 250 episodes so far, covering real and fictional women from history including everyone from Ella Fitzgerald to the women of the wild west, and Wonder Woman herself.","https://www.digitaltrends.com/wp-content/uploads/2020/12/the-history-chicks-history-podcasts.jpg?fit=720%2C480&p=1",true,true,10.0)


podcasts.push(pod1)
podcasts.push(pod2)
podcasts.push(pod3)
podcasts.push(pod4)
podcasts.push(pod5)
podcasts.push(pod6)
podcasts.push(pod7)
podcasts.push(pod8)
podcasts.push(pod9)





const loadPodcast = (array) =>
{   
    let cards = document.querySelector('#cards'); 

    for (const podcast of array)
    {   

        let div = document.createElement("div"); 
        div.innerHTML = 
        `
        <div class="card mt-5 mr-3" style="width: 18rem;">
        <img src="${podcast.img}" class="card-img-top" alt="...">
        <div class="card-body flex-nowrap">
          <h5 class="card-title">${podcast.name}</h5>
          <p class="d-flex justify-content-between align-items-center " >
                <a class="btn btn-warning" data-toggle="collapse" href="#collapse${podcast.id}" role="button" aria-expanded="false" aria-controls="collapse${podcast.id}">
                    Description
                </a>
                <button id="${podcast.id}" type="button" class="btn btn-link"><i class="fa-solid fa-star"></i></button>
           </p>
                <div class="collapse" id="collapse${podcast.id}">
                <div class="card card-body">
                <p class="card-text">${podcast.description}</p>
                </div>
        </div>

        </div>
        <ul class="list-group list-group-flush category">
          <li class="list-group-item ">${podcast.category}</li>
        
          <li class="list-group-item">${podcast.rating}</li>
        </ul>
        <div class="card-body">
          <a href="#" id="apple" class="card-link hidden">${podcast.apple ? "Apple Poscast" : ""}</a>
          <a href="#" id="spotify" class="card-link hidden">${podcast.spotify ? "Spotify" : ""} </a>
        </div>
      </div>
        `
        ;
        cards.appendChild(div);
    }
    addFavorites()
}



// FUNCION PARA BUSCAR POR CATEGORIA

const filterCategory = (array) =>{

}

const clearDiv = () =>  // creo esta funcion para que no se me duplique cada vez que busco
{   
    document.querySelector('#cards').innerHTML = ''; 
}

let filter = document.querySelector(".filter-search")
function filterPodcasts() { 
        let category = filter.value.toLowerCase()
        const result = podcasts.filter(podcasts => podcasts.category.includes(category))
        clearDiv()
        loadPodcast(result)
           
  
}

filter.addEventListener("input", filterPodcasts)

//------------------------------------------------------------

// FUNCION PARA AGREGAR UN PODCAST A FAVORITOS
    const favorites = []

    const updateFavorites = (array) =>{
        let favsContainer = document.querySelector("#favs")
        let container = document.getElementById("favContainer")
        if (container){
            favsContainer.innerHTML = ``
        }
        for (const podcast of array){
            let div = document.createElement("div")
            div.setAttribute("id", "favContainer")
            div.innerHTML = 
        `
        <div class="card mt-5 mr-3" style="width: 18rem;">
        <img src="${podcast.img}" class="card-img-top" alt="...">
        <div class="card-body flex-nowrap">
          <h5 class="card-title">${podcast.name}</h5>
          <p class="d-flex justify-content-between align-items-center " >
                <a class="btn btn-warning" data-toggle="collapse" href="#collapse${podcast.id}" role="button" aria-expanded="false" aria-controls="collapse${podcast.id}">
                    Description
                </a>
                <button id="${podcast.id}" onclick="deleteFavs()" type="button" class="btn btn-outline-danger btn-dlt"><i class="fa-sharp fa-solid fa-trash"></i></button>
           </p>
                <div class="collapse" id="collapse${podcast.id}">
                <div class="card card-body">
                <p class="card-text">${podcast.description}</p>
                </div>
        </div>

        </div>
        <ul class="list-group list-group-flush category">
          <li class="list-group-item ">${podcast.category}</li>
        
          <li class="list-group-item">${podcast.rating}</li>
        </ul>
        <div class="card-body">
          <a href="#" id="apple" class="card-link hidden">${podcast.apple ? "Apple Poscast" : ""}</a>
          <a href="#" id="spotify" class="card-link hidden">${podcast.spotify ? "Spotify" : ""} </a>
        </div>
      </div>

        `
        favsContainer.appendChild(div)
        }
        
      
    }

    const addFavorites = () =>
    {
    let btnFavs = document.querySelectorAll('.btn-link')
    for (const btn of btnFavs){
            btn.addEventListener ("click", () =>{
                //debugger
                let found = favorites.find(element => element.id == btn.id);
                if (found){
                    
               
                }
                else{let  pod = podcasts.find(element => element.id == btn.id)
                    if(pod){
                        let newPodcast = {
                            id:pod.id,
                            name: pod.name,
                            category: pod.category,
                            description: pod.description,
                            img: pod.img,
                            apple:pod.apple,
                            spotify:pod.spotify,
                            rating:pod.rating,
                            quantity: 1
                        }
                        favorites.push(newPodcast)
                       
                    }}
                
                
                updateFavorites(favorites)
            })
  
        }
        
    }
    

    loadPodcast(podcasts)
   
// AGREGAR POSCAST A FAVORITOS

let dlt =[]

const deleteFavs = () =>{
    let btnDlt = document.querySelectorAll(".btn-dlt")
    for (const btn of btnDlt){
        let found = favorites.find(pod => pod.id == btn.id)
        dlt = favorites.filter(element => element.id === found)
       
    }
    updateFavorites (dlt)
}

    /*
function filtrarPropiedades () {
    let zona = ("En qué zona la queres?").toLocaleLowerCase
    let tipo = ("Casa o departamento?").toLocaleLowerCase
    let cantidadAmbientes = Number(("Cuantos ambientes?"));
    let metrosCuadrados =Number(("cuantos metros cuadrados?"))
    let condicion = ("Queres comprar o alquilar?").toLocaleLowerCase
    let filtroPropiedades = propiedades.filter(propiedad=> propiedad.zona === zona && propiedad.tipo === tipo && propiedad.ambientes === cantidadAmbientes && propiedad.metroscuadrados <= metrosCuadrados && propiedad.condicion === condicion && disponibilidad == true)
    if (filtroPropiedades.length === 0){
        console.log("En este momento no hay propiedades disponibles")
    }else{
            console.log(filtroPropiedades) 
        }
}
let desicionUsuario = ("Desea agregar o buscar propiedad?").toLowerCase()
if (desicionUsuario === "agregar"){
    agregarPropiedad()
    }else{
        filtrarPropiedades()
    }
*/
/*
const loadEvents = ()=>
{
    let buttons = document.querySelectorAll('.btn-favorites')
    for (const button of buttons ){
            button.addEventListener("click", ()=>{
               if 
            })
    }
}
funcion para agregar podcastos a favoritos, despues la sigo haciendo
*/
/*
function agregarPropiedad(){
    let zona= ("En qué zona queda tu propiedad?").toLocaleLowerCase
    let tipo= ("Casa o departamento?").toLocaleLowerCase
    let cantidadAmbientes = Number(("Cuantos ambientes?"));
    let metrosCuadrados =Number(("cuantos metros cuadrados?"))
    let condicion = ("La queres vender o alquilar?").toLocaleLowerCase
    let disponiblidad = confirm("Ya está disponible?")
    let nuevaPropiedad = new propiedad(zona,tipo,cantidadAmbientes,metrosCuadrados,condicion,disponiblidad)
    propiedades.push(nuevaPropiedad)
}
*/