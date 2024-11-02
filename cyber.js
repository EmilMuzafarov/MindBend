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

// RSA Decryption
function decryptRSA() {
  const encryptedMessage = document.getElementById('inputText').value;
  const decrypted = rsa.decrypt(encryptedMessage);
  document.getElementById('outputText').textContent = `Decrypted Message (RSA): ${decrypted}`;
}

// ECC Encryption (simplified)
function encryptECC() {
  const message = document.getElementById('inputText').value;
  const encrypted = ecKeyPair.encrypt(message, 'hex');
  document.getElementById('outputText').textContent = `Encrypted Message (ECC): ${encrypted}`;
}

// ECC Decryption (simplified)
function decryptECC() {
  const encryptedMessage = document.getElementById('inputText').value;
  const decrypted = ecKeyPair.decrypt(encryptedMessage, 'utf8');
  document.getElementById('outputText').textContent = `Decrypted Message (ECC): ${decrypted}`;
}
