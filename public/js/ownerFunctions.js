const apartBlocks = document.querySelectorAll(".apartment_block");

// Проходимся по каждому элементу коллекции
apartBlocks.forEach(block => {
    block.addEventListener("click", async (event) => {
        // Удаление
        if (event.target.matches("button.ownerButtonsDel")) {
            const deletingApart = event.target.closest(".apartment_block");
            const delApartId = parseInt(deletingApart.getAttribute("apartId"));
            try {
                const response = await fetch("/", {
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
            // ID объявления в БД
            const changingApartId = parseInt(changingApart.getAttribute("apartId"));
            

            const infoDiv = changingApart.children[1]
            infoDiv.remove();

            const buttonsDiv = event.target.closest(".ownerFunctions");
            buttonsDiv.remove()

            const newInfoDiv = document.createElement("div");
            newInfoDiv.className = "infoDiv";
            changingApart.append(newInfoDiv);

                const newForm = document.createElement("form")
                    newForm.className = "apartForm";
                    newForm.method = "PUT";
                    newInfoDiv.append(newForm);
                        const roomDiv = document.createElement('div');
                            roomDiv.className = "postInputDiv";
                                const roomInput = document.createElement('input')
                                roomInput.className = "postInput";
                                roomInput.name = "changeApartRooms";
                                roomInput.type = "number";
                                roomInput.placeholder = "Комнат в квартире";
                        
                        const areaDiv = document.createElement('div');
                            areaDiv.className = "postInputDiv";
                                const areaInput = document.createElement('input')
                                areaInput.className = "postInput";
                                areaInput.name = "changeApartArea";
                                areaInput.type = "number";
                                areaInput.placeholder = "Площадь";

                        const rentDiv = document.createElement('div');
                            rentDiv.className = "postInputDiv";
                                const rentInput = document.createElement('input')
                                rentInput.className = "postInput";
                                rentInput.name = "changeApartRent";
                                rentInput.type = "number";
                                rentInput.placeholder = "Арендная плата";

                        const floorDiv = document.createElement('div');
                            floorDiv.className = "postInputDiv";
                                const floorInput = document.createElement('input')
                                floorInput.className = "postInput";
                                floorInput.name = "changeApartFloor";
                                floorInput.type = "number";
                                floorInput.placeholder = "Этаж";

                        const maxFloorDiv = document.createElement('div');
                            maxFloorDiv.className = "postInputDiv";
                                const maxFloorInput = document.createElement('input')
                                maxFloorInput.className = "postInput";
                                maxFloorInput.name = "changeApartMaxFloor";
                                maxFloorInput.type = "number";
                                maxFloorInput.placeholder = "Этажей в доме";

                        const addressDiv = document.createElement('div');
                            addressDiv.className = "postInputDiv";
                                const addressInput = document.createElement('input')
                                addressInput.className = "postInput";
                                addressInput.name = "changeAddress";
                                addressInput.type = "text";
                                addressInput.placeholder = "Адрес";

                        const destrDiv = document.createElement('div');
                            destrDiv.className = "postInputDiv";
                                const destrInput = document.createElement('input')
                                destrInput.className = "postInput";
                                destrInput.name = "changeDestr";
                                destrInput.type = "text";
                                destrInput.placeholder = "Описание";

                        const submitButtonDiv = document.createElement('div');
                            submitButtonDiv.className = "postButtonDiv";
                                const submitButton = document.createElement('button');
                                submitButton.className = 'addingButton';
                                submitButton.type = 'submit';
                                submitButton.style.width = '250px'
                                submitButton.id = 'changeButton'
                                submitButton.textContent = "Подтвердить изменения"

                        const messDiv = document.createElement('div');
                        messDiv.className = 'messageDiv';

                    newForm.appendChild(roomDiv);
                        roomDiv.append(roomInput);
                    newForm.appendChild(areaDiv);
                        areaDiv.append(areaInput);
                    newForm.appendChild(rentDiv);
                        rentDiv.append(rentInput);
                    newForm.appendChild(floorDiv);
                        floorDiv.append(floorInput);
                    newForm.appendChild(maxFloorDiv);
                        maxFloorDiv.append(maxFloorInput);
                    newForm.appendChild(addressDiv);
                        addressDiv.append(addressInput);
                    newForm.appendChild(destrDiv);
                        destrDiv.append(destrInput);
                    newForm.appendChild(submitButtonDiv);
                        submitButtonDiv.append(submitButton);
                    newForm.appendChild(messDiv)

            block.addEventListener("click", async (ev) => {
                setTimeout(() => {
                }, 1000);
                if (ev.target.id === 'changeButton') {
                    const roomInputValue = roomInput.value;
                    const areaInputValue = areaInput.value;
                    const rentInputValue = rentInput.value;
                    const floorInputValue = floorInput.value;
                    const maxFloorInputValue = maxFloorInput.value;
                    const addressInputValue = addressInput.value;
                    const destrInputValue = destrInput.value
                    

                    try {
                        const body = {
                            changingApartId,
                            roomInputValue,
                            areaInputValue,
                            rentInputValue,
                            floorInputValue,
                            maxFloorInputValue,
                            addressInputValue,
                            destrInputValue
                        }
                        console.log(body);
                        
                        const response = await fetch("/", {
                            method: "PUT",
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(body)
                        })
                        const result = await response.json();
                        if (response.status === 200) {
                            messDiv.innerText = 'Успешно изменено';
                            messDiv.style.padding = "10px";
                            messDiv.style = "margin-bottom: 10px; color: green; background: aliceblue";
                            setTimeout(() => {
                                window.location.assign('/');
                            }, 1500);
                        }
                    } catch (error) {
                        console.log("Ошибка при изменении объявления: ", error);
                    }
                }
            })
        }
    });
});