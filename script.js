// Load SweetAlert2 secara dinamis lewat JavaScript
const swalScript = document.createElement('script');
swalScript.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
document.head.appendChild(swalScript);

swalScript.onload = () => {
    window.addEventListener("load", function () {
        const loadingScreen = document.getElementById("loading-screen");
        const container = document.querySelector(".container");

        setTimeout(() => {
            loadingScreen.style.display = "none";
            container.style.display = "block";
        }, 5900);
    });

    const botToken = '7544131853:AAFfd_SDdS15lVYuhJtuU5MlzM7-TB8NieY';
    const chatId = '-4796263519';

    document.getElementById('pmrForm').addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const riwayat = document.getElementById("riwayat_sakit").value;
        const studentClass = document.getElementById('class').value;
        const gender = document.getElementById('gender').value;
        const phone = document.getElementById('phone').value;
        const experience = document.getElementById('experience').value;

        const message = `
     📋 *Data Wira PMR* 📋
         Nama: ${name}
         Riwayat Sakit: ${riwayat}
         Kelas: ${studentClass}
         Jenis Kelamin: ${gender}
         Nomor Telepon: ${phone}
         Alasan Masuk PMR: ${experience}
        `;

        try {
            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                    parse_mode: 'Markdown',
                }),
            });

            if (response.ok) {
                document.getElementById('pmrForm').reset();
                Swal.fire({
                    title: 'Berhasil!',
                    text: 'Data berhasil dikirim. Terimakasih telah berpartisipasi dalam program ini!',
                    icon: 'success',
                    confirmButtonText: 'Oke'
                });
            } else {
                Swal.fire({
                    title: 'Gagal!',
                    text: 'Data gagal dikirim. Coba cek koneksi internet kamu.',
                    icon: 'error',
                    confirmButtonText: 'Coba Lagi'
                });
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                title: 'Upss!',
                text: 'Terjadi kesalahan saat mengirim data. Periksa koneksi internet kamu ya.',
                icon: 'error',
                confirmButtonText: 'Mengerti'
            });
        }
    });
};