console.log("hello koyal")
fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        //console.log(data)
    })
})

//challenge
// fetch('http://localhost:3000/weather?address=kolkata').then((response) => {
//     response.json().then((data) => {
//         if(data.error){
//             console.log(data.error)
//         } else {
//             console.log(data.location)
//         }
        
//     })
// }) 
//get form data
const weatherdata = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
weatherdata.addEventListener('submit',(e) => {
    e.preventDefault()
    const location = search.value
    messageOne.textContent = 'loading...'
    messageTwo.textContent = ' '
    fetch('/weather?address='+location).then((response) => {
        response.json().then((data) => {
            if(data.error){
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
                //console.log(data.forecast)
            }
            
        })
    }) 
})