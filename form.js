
var onloadCallback = function() {
  grecaptcha.render('html_element', {
    'sitekey' : '6LcNBrMZAAAAAADfzRm8Q8lm2LcaBkhgOxt_OoM-'
  });
};


(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');

    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {

        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        validCheck()
        form.classList.add('was-validated');

        window.sessionStorage.setItem('form', JSON.stringify(data));

      }, false);
    });
  }, false);
})();

var data = [];
function validCheck() {
  var fname = document.getElementById('firstname')
  var lname = document.getElementById('lastname')
  var birth = document.getElementById('birth')
  let edu = document.getElementById('education')
  var height = document.getElementById('height')
  var phone = document.getElementById('phone')
  var email = document.getElementById('email')
  var email2 = document.getElementById('confirmEmail')
  var address = document.getElementById('address')
  var address2 = document.getElementById('address2')
  var city = document.getElementById('city')
  var state = document.getElementById('state')
  var zip = document.getElementById('zip')

  if (email.value != email2.value) {
    alert("email doesn't match.")
    return false
  }
  
  $("input[name=address]")[0].oninvalid = function (event) {
    event.target.setCustomValidity("Wrong input format! Please use only letters and numbers.");
  };

  $("input[name=address2]")[0].oninvalid = function (event) {
    event.target.setCustomValidity("Wrong input format! Please use only letters and numbers.");
  };

  if(address2.value != " "){
    var newAddress = address.value +" "+ address2.value
  }

  data.push(fname.value);
  data.push(lname.value);
  data.push(birth.value);
  data.push(edu.value);
  data.push(height.value);
  data.push(phone.value);
  data.push(email.value);
  data.push(newAddress);
  data.push(city.value);
  data.push(state.value);
  data.push(zip.value);

  console.log(data)

  return true
}