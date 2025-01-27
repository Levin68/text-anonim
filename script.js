// Ambil elemen yang diperlukan
const messagesContainer = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Fungsi untuk menambahkan pesan ke layar
function addMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `
        <img src="user-icon.png" alt="User">
        <span>${message}</span>
    `;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll otomatis ke bawah
}

// Event listener untuk tombol kirim
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message !== '') {
        addMessage(message);
        messageInput.value = ''; // Kosongkan input
    }
});

// Event listener untuk menekan tombol "Enter"
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});