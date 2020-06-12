
const weatherForm = document.querySelector('form')
const search = document.querySelector('i nput')
const message1 = document.querySelector('#msg1')
message1.textContent = 'From Javascript'
const message2 = document.querySelector('#msg2')
message2.textContent = 'From JS'
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    console.log(location)
    message1.textContent = 'Loading...'
    message2.textContent = ''
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message1.textContent = data.error
            } else {
                message1.textContent = data.location
                message2.textContent = data.forecast
            }
        })
    })
})