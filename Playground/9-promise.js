

const add =(a,b)=>{
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        },2000)
   })
}

/* //nested function calls
add(1,2).then((sum)=>{
    console.log(sum)
    add(sum,2).then((sum2)=>{
        console.log(sum2)
    }).catch((e)=>{
        console.log(e)
    })
}).catch((e)=>{
    console.log(e)
}) */

//Promise Chaining. The below then is executed when add function is resolved
add(1,2).then((sum)=>{
    console.log(sum)
    return add(sum,2)
    //the below then will execute when the above add fn is resolved
}).then((sum2)=>{
    console.log(sum2)
    //Just one catch unlike above example would suffice and no deep nesting like above example
}).catch((e)=>{
    console.log(e)
})