const form = document.getElementById("form");
const btn = document.getElementById('button');
const emailInput = document.getElementById('email_id');

document.getElementById("form")
 .addEventListener('submit', function(event) {
   event.preventDefault();

   if (!isValidEmail(emailInput.value)) {
     Swal.fire({
       icon: 'error',
       title: 'E-mail inválido',
       text: 'Por favor, verifica que el e-mail sea correcto',
     });
     return;
   }

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_zrlvdob';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      Swal.fire({
        icon: 'success',
        title: 'Enviado!',
        text: 'Su consulta fue enviada correctamente',
      });

      form.reset();
    })
    .catch(err => {
      btn.value = 'Enviar';
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ha ocurrido un error y su conuslta no fue enviada',
        footer: JSON.stringify(err),
      });
    });
});

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}