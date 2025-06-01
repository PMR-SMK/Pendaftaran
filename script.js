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
    const studentClass = document.getElementById('class').value;
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value;
    const experience = document.getElementById('experience').value;

    const message = `
        📋 *Data Wira PMR* 📋
        Nama: ${name}
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
            alert('Data berhasil dikirim. Terimakasih Telah Berpartisipasi Dalam Program Ini. Sampai Bertemu Kembali V: ');
        } else {
            alert('Data Gagal Dikirm. Coba Deh Cek Coneksi Internet Kamu :)');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Upss!! Coba Deh Cek Koneksi Internet Kamu :(');
    }
});