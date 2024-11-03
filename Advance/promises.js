// const promiseOne = new Promise((resolve,reject)=>{
//     // Do an async task
//     // DB calls , network
//     setTimeout(()=>{
//         console.log('Async task is complete');
//         resolve();
//     },1000)
// });

// promiseOne.then(()=>{
//     console.log("Promise consumed")
// })

// new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Async task 2");
//         resolve();
//     },1000)
// }).then(()=>{
//     console.log('Async 2 resolved');
// })

// const promiseThree = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve({username : 'shivam' , email:'shivampandey@gmail.com'})
//     },1000)
// })

// promiseThree.then((user)=>{
//     console.log(user);
    
// })

const promiseFour = new Promise((resolve , reject) =>{
    setTimeout(()=>{
        let error = false;
        if(!error) {
            resolve({username : 'shivam' , password : '123'})
        } else {
            reject('Error : Something went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
    
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log('the promise is either resolved or rejected');
})

async function consumePromise () {
    try{
        const response = await promiseFour
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}
consumePromise()

const url = 'https://randomuser.me/api/';
fetch(url) 
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch(err) {
    console.log(err);
}
