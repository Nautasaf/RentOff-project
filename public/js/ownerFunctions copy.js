const apartBlocks = document.querySelectorAll(".apartment_block");

// Проходимся по каждому элементу коллекции
apartBlocks.forEach(block => {
    block.addEventListener("click", async (event) => {
        // Удаление
        if (event.target.matches("button.ownerButtonsDel")) {
            const deletingApart = event.target.closest(".apartment_block");
            const delApartId = parseInt(deletingApart.getAttribute("apartId"));
            try {
                const response = await fetch("/profile", {
                    method: "DELETE",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({delApId: delApartId})
                })
                const result = await response.json()
            } catch (error) {
                console.log("Ошибка при удалении объявления: ", error);
            }
            deletingApart.remove();
        }

        // Изменение
        if (event.target.matches("button.ownerButtonsPut")) {
            const changingApart = event.target.closest(".apartment_block");
            const changingApartId = parseInt(changingApart.getAttribute("apartId"));
            try {
                const response = await fetch("/profile", {
                    method: "PUT",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({changeApId: changingApartId})
                })
                const result = await response.json()
            } catch (error) {
                console.log("Ошибка при удалении объявления: ", error);
            }
            
        }
    });
});