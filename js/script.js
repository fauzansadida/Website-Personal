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
            form.reset();
        });
    }

    // Fetch and display bookings
    const bookingTable = document.getElementById('booking-table');

    if (bookingTable) {
        fetch('php/lihat_pemesanan.php')
            .then(response => response.json())
            .then(data => {
                const tbody = bookingTable.querySelector('tbody');
                tbody.innerHTML = '';

                data.forEach(row => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${row.name}</td>
                        <td>${row.email}</td>
                        <td>${row.date}</td>
                    `;
                    tbody.appendChild(tr);
                });
            });
    }
});
