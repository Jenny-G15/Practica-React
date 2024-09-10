async function GetTareas() {
    return new Promise (async(resolve,reject)=>{
        let response= await fetch("http://localhost:3000/tareas");
        if (response) {
            let tareas=response.json();
            return resolve(tareas)
        }
        else {
            reject (new Error("Invalido"))
        }
    })
}

export default GetTareas