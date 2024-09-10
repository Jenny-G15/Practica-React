export const updateTarea = async (id, tarea, prioridad) => {
    try {
        const response = await fetch(`http://localhost:3000/tareas/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tarea, 
                prioridad
            }),
        });
        if (!response.ok) {
            throw new Error('Error al actualizar tarea');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};