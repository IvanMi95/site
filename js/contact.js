function sendMail(event) {
  event.stopPropagation();
  var recaptchaResponse = grecaptcha.getResponse();
  var messageBox = document.getElementById("form-response-message");
  var checkbox = document.querySelector("input[name='agree']");
  var name = document.getElementById("name").value.trim();
  var phone = document.getElementById("phone").value.trim();

  if (!checkbox.checked) {
    messageBox.innerHTML = "<p>Devi accettare l'informativa sulla privacy.</p>";
    messageBox.style.backgroundColor = "#ffdddd";
    messageBox.style.color = "#d8000c";
    messageBox.style.display = "block";
    return;
  }

  if (name === "" || phone === "") {
    messageBox.innerHTML = "<p>Nome e numero di telefono sono obbligatori.</p>";
    messageBox.style.backgroundColor = "#ffdddd";
    messageBox.style.color = "#d8000c";
    messageBox.style.display = "block";
    return;
  }

  if (!recaptchaResponse) {
    messageBox.innerHTML = "<p>Per favore completa la verifica reCAPTCHA.</p>";
    messageBox.style.backgroundColor = "#ffdddd";
    messageBox.style.color = "#d8000c";
    messageBox.style.display = "block";
    return;
  }

  var params = {
    "request": document.getElementById("request").value,
    "name": name,
    "email": document.getElementById("email").value,
    "phone": phone,
    "message": document.getElementById("message").value,
    "g-recaptcha-response": recaptchaResponse,
  };

  const TEMPLATE_ID = "template_wavbo3i";
  const SERVICE_ID = "service_dzj1bll";

  emailjs.send(SERVICE_ID, TEMPLATE_ID, params)
    .then((res) => {
      document.getElementById("request").value = "Seleziona il tipo di servizio";
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
      
      messageBox.innerHTML = "<p style='margin: 0'>Il tuo messaggio è stato inviato con successo!</p>";
      messageBox.style.backgroundColor = "#d4edda";
      messageBox.style.color = "#155724";
      messageBox.style.display = "block";
      

    })
    .catch((err) => {
      messageBox.innerHTML = "<p style='margin: 0' >Si è verificato un errore. Riprova più tardi.</p>";
      messageBox.style.backgroundColor = "#ffdddd";
      messageBox.style.color = "#d8000c";
      messageBox.style.display = "block";
    });
    
    grecaptcha.reset();
}
