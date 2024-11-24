// RSA Encryption/Decryption
const rsa = new JSEncrypt();
rsa.setPublicKey(`-----BEGIN PUBLIC KEY-----
YOUR_PUBLIC_RSA_KEY_HERE
-----END PUBLIC KEY-----`);
rsa.setPrivateKey(`-----BEGIN PRIVATE KEY-----
YOUR_PRIVATE_RSA_KEY_HERE
-----END PRIVATE KEY-----`);

// ECC Encryption/Decryption
const EC = elliptic.ec;
const ec = new EC('secp256k1');
const ecKeyPair = ec.genKeyPair();
const publicKeyECC = ecKeyPair.getPublic('hex');
const privateKeyECC = ecKeyPair.getPrivate('hex');

// Hashing Function (SHA-256)
async function hashMessage() {
  const message = document.getElementById('inputText').value;
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
  document.getElementById('outputText').textContent = `Hashed Message (SHA-256): ${hashHex}`;
}

// RSA Encryption
function encryptRSA() {
  const message = document.getElementById('inputText').value;
  const encrypted = rsa.encrypt(message);
  document.getElementById('outputText').textContent = `Encrypted Message (RSA): ${encrypted}`;
}

async function hashMessage() {
  const inputText = document.getElementById("inputText").value;
  const encoder = new TextEncoder();
  const data = encoder.encode(inputText);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
  document.getElementById("outputText").textContent = "Hashed (SHA-256): " + hashHex;
}

function mockEncrypt(algorithm) {
  const inputText = document.getElementById("inputText").value;
  let encryptedText;
  if (algorithm === "RSA") {
    encryptedText = btoa(inputText); // Mock encryption for demo
    document.getElementById("outputText").textContent = "Encrypted (RSA): " + encryptedText;
  } else if (algorithm === "ECC") {
    encryptedText = btoa(inputText.split("").reverse().join("")); // Mock ECC encryption
    document.getElementById("outputText").textContent = "Encrypted (ECC): " + encryptedText;
  }
}
function showSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.transform = 'translateX(0)';
}

function hideSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.transform = 'translateX(100%)';
}

function showBar() {
    const mainbar = document.querySelector('.mainbar');
    mainbar.style.display = 'flex';
}

function hideBar() {
    const mainbar = document.querySelector('.mainbar');
    mainbar.style.display = 'none';
}
