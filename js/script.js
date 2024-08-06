document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('booking-form');
    const messageDiv = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = new FormData(form);
            const response = await fetch('php/pesan_tiket.php', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            messageDiv.textContent = result.message;

            if (response.ok) {
                // Redirect to the "Lihat Pemesanan" page after successful submission
                window.location.href = 'lihat_pemesanan.html';
            }
        });
    }
});
