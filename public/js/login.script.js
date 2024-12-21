const loginDiv = document.querySelector('.loginDiv');
const logForm = document.querySelector('.loginForm')
const messageDiv = document.querySelector('.messageDiv')

loginDiv?.addEventListener('click', async (event) => {
    event.preventDefault();
    if (event.target.id === "logBtn") {
        try {
            const body = Object.fromEntries(new FormData(logForm));
            const response = await fetch("/login", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
            const result = await response.json();
            if (response.status === 200) {
                messageDiv.innerText = 'Успешный вход';
                messageDiv.style.padding = "10px";
                messageDiv.style = "margin-bottom: 10px; color: green; background: aliceblue"
                setTimeout(() => {
                    window.location.assign('/');
                }, 2500);
            } else {
                messageDiv.innerText = 'Неправильные логин или пароль';
                messageDiv.style.padding = "10px";
                messageDiv.style = "margin-bottom: 10px"
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    }
})