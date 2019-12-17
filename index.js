document.addEventListener("DOMContentLoaded", () => {
 let startButton = document.querySelector(".start")

 startButton.addEventListener("click", async () => {
let deck = await getDeck()

let card1Img = document.createElement("img")
card1Img.src = deck.data.cards[0].image
let card2Img = document.createElement("img")
card2Img.src = deck.data.cards[1].image

let playersCard1 = document.querySelector("#playerCard1")
playersCard1.appendChild(card1Img)
let playersCard2 = document.querySelector("#playerCard2")
playersCard2.appendChild(card2Img)








    
  
    

})




 const getDeck = async() => {

    try { 
     let deck = await axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=2`)
     return deck
      
 
    } catch(err){
        console.log(err)
    }
 }
 
    
    
    
})