function sendMail(event) {
  event.preventDefault();
  var recaptchaResponse = grecaptcha.getResponse();
  if (!recaptchaResponse) {
    alert("Per favore completa la verifica reCAPTCHA.");
    return;
  }
  var params = {
    "request": document.getElementById("request").value,
    "name": document.getElementById("name").value,
    "email": document.getElementById("email").value,
    "phone": document.getElementById("phone").value,
    "message": document.getElementById("message").value,
    "g-recaptcha-response": recaptchaResponse,
  };
  const TEMPLATE_ID = "template_wavbo3i";
  const SERVICE_ID = "service_dzj1bll";
  emailjs.send(SERVICE_ID, TEMPLATE_ID, params).then((res) => {
    document.getElementById("request").value = "Seleziona il tipo di servizio";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
  })
  grecaptcha.reset();
}
