document.querySelector('.input-btn').addEventListener('click', (event) => {
    event.preventDefault();
    let data = document.querySelector('input').value;
    document.querySelector('.input-validation').innerHTML = data;
})