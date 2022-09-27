
const add = (x,y,callback)=>{    
    setTimeout(()=>{
        callback(x+y)
    },3000)
}

add(1,5,(sum)=>{
    console.log("The sum is " + sum)
})