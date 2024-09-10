async function PostTareas(tarea, prioridad) {
    try {
      const postData = {
        tarea, 
        prioridad
      };
      const response = await fetch("http://localhost:3000/tareas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      return await response.json();
    } catch (error) {
      console.error("usuario invalido:", error);
      throw error;
    }
}

export default PostTareas