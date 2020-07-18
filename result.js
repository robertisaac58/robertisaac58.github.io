var formArray = JSON.parse(window.sessionStorage.getItem('form'));

console.log(formArray)

window.sessionStorage.removeItem('form')

document.getElementById('name').innerHTML = formArray[0];
document.getElementById('surname').innerHTML = formArray[1];
document.getElementById('birth').innerHTML = formArray[2];
document.getElementById('edu').innerHTML = formArray[3];
document.getElementById('height').innerHTML = formArray[4];
document.getElementById('phone').innerHTML = formArray[5];
document.getElementById('email').innerHTML = formArray[6];
document.getElementById('address').innerHTML = formArray[7];
document.getElementById('city').innerHTML = formArray[8];
document.getElementById('state').innerHTML = formArray[9];
document.getElementById('zip').innerHTML = formArray[10];

function submit() {
    if (confirm("Your information has been successfully submitted.")) {
        window.location.assign('form.html')
    }
}

