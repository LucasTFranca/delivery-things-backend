require('dotenv').config();
const crypto = require('crypto');

const encrypt = (password) => {
  const iv = Buffer.from(crypto.randomBytes(16));
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(process.env.CRYPTO_KEY), iv);

  const encryptedPassword = Buffer.concat([
    cipher.update(password),
    cipher.final(),
  ]);

  return {
    iv: iv.toString('hex'),
    password: encryptedPassword.toString('hex'),
  };
};

const decrypt = (encryption) => {
  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    Buffer.from(process.env.CRYPTO_KEY),
    Buffer.from(encryption.iv, 'hex'),
  );

  const decryptedPassword = Buffer.concat([
    decipher.update(Buffer.from(encryption.password, 'hex')),
    decipher.final(),
  ]);

  return decryptedPassword.toString();
};

module.exports = {
  decrypt,
  encrypt,
};
