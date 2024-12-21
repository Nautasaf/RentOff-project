const registrationDiv = document.querySelector('.registrationDiv');
const regForm = document.querySelector('.registrationForm')
const messageDiv = document.querySelector('.messageDiv')

registrationDiv?.addEventListener('click', async (event) => {
    event.preventDefault();
    if (event.target.id === "regBtn") {
        try {
            const body = Object.fromEntries(new FormData(regForm));
            const response = await fetch("/registration", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
            const result = await response.json();
            if (response.status === 201) {
                messageDiv.innerText = 'Успешная регистрация';
                messageDiv.style.padding = "10px";
                messageDiv.style = "margin-bottom: 10px; color: green; background: aliceblue"
                setTimeout(() => {
                    window.location.assign('/');
                }, 2500);
            } else {
                messageDiv.innerText = 'Проверьте свои данные';
                messageDiv.style.padding = "10px";
                messageDiv.style = "margin-bottom: 10px"
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    }
})