const form = document.getElementById('messageForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const message = form.elements.message.value;

  try {
    const response = await fetch('/submit', {
      method: 'POST',
      body: JSON.stringify({ message })
    });

    if (response.ok) {
      alert('Messaggio inviato con successo!');
      form.reset();
    } else {
      alert('Si è verificato un errore. Riprova più tardi.');
    }
  } catch (error) {
    console.error('Errore durante linvio del messaggio: ', error);
    alert('Si è verificato un errore. Riprova più tardi.');
  }
});