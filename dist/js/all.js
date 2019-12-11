
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var email = document.getElementById('email');
var msg = document.getElementById('msg');
var submitBtn = document.getElementById('submit');



    submitBtn.addEventListener("click", function(e){
      e.preventDefault();
      if (
        validateInput(firstName) === true &&
        validateInput(lastName) === true &&
        validateEmail(email) === true &&
        validateMssgField(msg) === true

      ){
        var body = '<p>Ime: ' + firstName.value + '</p><p>Prezime: ' + lastName.value + '</p><p>E-mail: ' + email.value + '</p><p>Poruka: ' + msg.value + '</p>';
        Email.send({
          SecureToken : "79089b8f-00b8-498d-844f-ccd5a89b133a",
          To : 'mateja.bezjak@diwanee.com',
          From : "mateja.mia.bezjak@gmail.com",
          Subject : "Forma popunjena!",
          Body : body
        }).then(
            function(message) { alert('Congratulations! You\'ve submitted the form successfully!');}
          );
        }
      });

    firstName.addEventListener("focusout", function() {
        validateInput(this);
    });

    lastName.addEventListener("focusout", function() {
        validateInput(this);
    });

    email.addEventListener("focusout", function() {
        validateEmail(this);
    });

    msg.addEventListener("focusout", function() {
        validateMssgField(this);
    });

function validateInput(input){
    if (checkIfEmpty(input)) return false;
    if (!checkIfLetters(input)) return false;
    return true;
}

function validateEmail(input){
    if (checkIfEmpty(input)) return false;
    if (!checkIfCharacters(input)) return false;
    return true;
}

function validateMssgField(input){
    if (checkIfEmpty(input)) return false;
    return true;
}

function checkIfEmpty(input){
  console.log(input.parentElement);

    if (input.value.trim() === ""){

        setInvalid(input, ('This field mustn\'t be empty!'));
        return true;
    } else {
        setValid(input);
        return false;
    }
}

function checkIfLetters(input){
    if(/^[a-zA-Z ]+$/.test(input.value)){

        setValid(input);

      return true;
    } else {

        setInvalid(input, ('This field must contain only letters!'));
        return false;

    }

}

function checkIfCharacters(input){
  if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)){

      setValid(input);

    return true;
  } else {

      setInvalid(input, ('This is not a valid e\-mail address!'));
      return false;

  }
}

    function setInvalid(input, message){
      var field = input.parentElement;
        field.nextElementSibling.innerHTML = message;
        field.querySelector('.b-form__field-input--text').style.border = 'thin solid #ff2222';
        field.querySelector('#invalidImg').style.display = 'block';
        field.querySelector('#validImg').style.display = 'none';

    }

    function setValid(input){
      var field = input.parentElement;
            field.nextElementSibling.innerHTML = "";
            field.querySelector('.b-form__field-input--text').style.border = 'thin solid #19841c';
            field.querySelector('#validImg').style.display = 'block';
            field.querySelector('#invalidImg').style.display = 'none';

    }


var menuLink = document.getElementsByClassName('b-header__link'),
    windowWidth = document.documentElement.clientWidth;

    

document.getElementById('burger').addEventListener("click", openMenu);

if(windowWidth < 1024){
    for (var i = 0 ; i < menuLink.length; i++) {
        menuLink[i].addEventListener('click' , closeMenu ) ;
     }
}

function openMenu(){
    document.getElementById('dropdown').classList.toggle("active");
    document.getElementById('burger').classList.toggle("active");
}

function closeMenu(){
    document.getElementById('dropdown').classList.toggle("active");
}
