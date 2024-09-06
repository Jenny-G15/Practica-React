async function PostUsers(username,email,password,) {
    try {
      const userData = {
        username,
        email,
        password,
      };
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      return await response.json();
    } catch (error) {
      console.error("usuario invalido:", error);
      throw error;
    }
}

export default PostUsers