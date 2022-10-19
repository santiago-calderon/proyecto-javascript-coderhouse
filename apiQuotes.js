const comments = document.querySelector("#quotes")
const quotesAuthor = document.querySelector("#quotesAuthor")
const btnQuotes = document.querySelector("#btnQuotes")



let getComment = () =>
{
    fetch("http://api.quotable.io/random")
    .then(res => res.json())
    .then(data =>{
        comments.innerHTML = `
            " ${data.content} "
        `
        quotesAuthor.innerHTML = data.author
    })

}
getComment()
btnQuotes.addEventListener("click", getComment)