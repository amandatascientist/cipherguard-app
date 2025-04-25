let savedPassword = ""; // temporarily store password

function encryptText() {
    let input = document.getElementById('inputText').value.trim();
    let shift = parseInt(document.getElementById('shiftValue').value) || 3;
    let password = document.getElementById('encryptionPassword').value.trim();

    if (!input) {
        showMessage("Please enter some text to encrypt!");
        return;
    }
    if (!password) {
        showMessage("Please enter a password for encryption!");
        return;
    }

    savedPassword = password; // save password

    let encrypted = '';

    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i) + shift;
        encrypted += String.fromCharCode(charCode);
    }

    document.getElementById('outputText').value = encrypted;
    showMessage("Text Encrypted Successfully!");
}

function decryptText() {
    let input = document.getElementById('inputText').value.trim();
    let shift = parseInt(document.getElementById('shiftValue').value) || 3;
    let password = document.getElementById('encryptionPassword').value.trim();

    if (!input) {
        showMessage("Please enter text to decrypt!");
        return;
    }
    if (!password) {
        showMessage("Please enter your decryption password!");
        return;
    }
    if (password !== savedPassword) {
        showMessage("Wrong Password! Decryption Denied!");
        return;
    }

    let decrypted = '';

    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i) - shift;
        decrypted += String.fromCharCode(charCode);
    }

    document.getElementById('outputText').value = decrypted;
    showMessage("Text Decrypted Successfully!");
}

function copyOutput() {
    let output = document.getElementById('outputText');
    if (!output.value) {
        showMessage("Nothing to copy!");
        return;
    }
    output.select();
    output.setSelectionRange(0, 99999);
    document.execCommand("copy");
    showMessage("Output Copied to Clipboard!");
}

function clearFields() {
    document.getElementById('inputText').value = "";
    document.getElementById('outputText').value = "";
    document.getElementById('shiftValue').value = "";
    document.getElementById('encryptionPassword').value = "";
    savedPassword = "";
    showMessage("All Fields Cleared!");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function showMessage(msg) {
    const message = document.getElementById('message');
    message.textContent = msg;
    setTimeout(() => {
        message.textContent = "";
    }, 2000);
}
