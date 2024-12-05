// We earlier saw the call back hell, callback pyramid making it unreadable therefore we use promises
// Two states -> Fulfill , Reject
// Promises => Object (state, result)
// If fulfilled - we get result in place of value
// If not - we get Undefined in place of value
// 3rd state => pending (we still have undefined at place of value)


// let promise = new Promise(resolve, reject){
//     if(true){
//         resolve("Result");
//     }
//     else{
//         reject("Reason/Error");
//     }
// }

// with this promise we have methods .then(), .catch()

count sum = (a, b) => {
    return new Promise((resolve, reject) =>{

    })
}



sum(50, 3).then((res) =>{
    console.log(res)
}).then(() => {

})


.catch((err) = > {
    console.log((err))
}).finally(() => {
    console.log("code executes everytime")
})

fetch("http://google.com")
.then((res) => {
    return res.json();
}).then((data) =>{
    console.log(data)
}).catch((err) => {
    console.log(err)
})