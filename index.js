let button = document.querySelector(".btn")
let content = document.querySelector(".quote-holder")
// const ul = document.createElement("ul")

let quotes = ["The only way to do great work is to love what you do. - Steve Jobs",
            "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King",
            "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
            "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
            "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
            "Be the change that you wish to see in the world. - Mahatma Gandhi",
            "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
            "The only true wisdom is in knowing you know nothing. - Socrates",
            "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
            "Life is what happens when you're busy making other plans. - John Lennon",
           "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
        "The future belongs to those who believe in the beauty of their dreams.- Eleanor Roosevelt"
]
console.log(quotes)

button.addEventListener("click", function(){
quotes.forEach(element => {
  const random =  Math.floor(Math.random() *quotes.length) 
  console.log(random)
  content.textContent = quotes[random]
  content.classList.add("menu")
  console.log(content)
});
})







// function dis.lplayQuotes(){
//     quotes.forEach(element => {
//        const li = document.createElement("li")
//       li.textContent = element   
//       content.appendChild(li)
//     });
// }

//     window.onload = displayQuotes










