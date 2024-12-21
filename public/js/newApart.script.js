const addApart = document.querySelector('.addApart');
const apartForm = document.querySelector('.apartForm')
const messageDiv = document.querySelector('.messageDiv')

addApart?.addEventListener('click', async (event) => {
    event.preventDefault();
    if (event.target.id === "apartBtn") {
        try {
            const body = Object.fromEntries(new FormData(apartForm));
            const response = await fetch("/", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
            const result = await response.json();
            if (response.status === 201) {
                messageDiv.innerText = 'Объявление успешно создано';
                messageDiv.style.padding = "10px";
                messageDiv.style = "margin-bottom: 10px; color: green; background: aliceblue"
                setTimeout(() => {
                    window.location.assign('/');
                }, 1500);
            } else {
                messageDiv.innerText = 'Проверьте свои данные';
                messageDiv.style.padding = "10px";
                messageDiv.style = "margin-bottom: 10px"
                setTimeout(() => {
                    messageDiv.innerText = 'Checkout your data';
                }, 1500);
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    }
})