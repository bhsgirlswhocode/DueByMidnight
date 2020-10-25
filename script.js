var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click", function(){
     var newMessage = document.createElement("li");
     newMessage.innerHTML = textbox.value;
     messages.appendChild(newMessage);
     textbox.value = "";
});


function getName() {
var nameField = document.getElementById('nameField').value;
var result = document.getElementById('result');
}

function getEmail() {
  var emailField = document.getElementById('emailField').value;
  var result = document.getElementById('result');
}


/*
function getprojname() {
  var nameProj = document.getElementById('nameProj').value;
  var result = document.getElementById('result');
}
 
const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('change', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
*/

$('button').click(function () {
                    var str = $('#name').val()
                    $('#template').html(str);
                });

