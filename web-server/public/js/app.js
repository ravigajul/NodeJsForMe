console.log("This is from java script")



const weatherForm = document.querySelector('form')
const txtLocation = document.querySelector('input')
const messageOne= document.querySelector('#message-1')
const messageTwo= document.querySelector('#message-2')
weatherForm.addEventListener('submit',(e)=>{
    //This will prevent the browser to reload on clicking submit that si default behaviour
    e.preventDefault()
    const location = txtLocation.value
    fetch('http://localhost:3000/Weather?search=' + location, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  
      }).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
        }else{
            messageOne.textContent = data.location
            messageTwo.textContent =data.forcast
            console.log(data.location)
            console.log(data.forcast)
        }
    })
})
})