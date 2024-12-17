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
                messageDiv.textContent = result.data;
                setTimeout(() => {
                    window.location.assign('/');
                }, 1500);
            } else {
                messageDiv.textContent = result.data;
                setTimeout(() => {
                    messageDiv.innerText = 'Checkout your data';
                    apartForm.reset();
                }, 1500);
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    }
})