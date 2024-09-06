async function GetUsers() {
    return new Promise (async(resolve,reject)=>{
        let response= await fetch("http://localhost:3000/users");
        if (response) {
            let users=response.json();
            return resolve(users)
        }
        else {
            reject (new Error("Invalido"))
        }
    })
}

export default GetUsers