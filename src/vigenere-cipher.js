const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let res = "";
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      const charIndex = char.charCodeAt(0);
      if (charIndex >= 65 && charIndex <= 90) {
        const keyCode = key[keyIndex % key.length].charCodeAt(0);
        const encrCode = ((charIndex - 65 + (keyCode - 65) + 26) % 26) + 65;
        res += String.fromCharCode(encrCode);
        keyIndex++;
      } else {
        res += char;
      }
    }
    return this.direction ? res : res.split("").reverse().join("");
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let res = "";
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      const charCode = char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        const keyCode = key[keyIndex % key.length].charCodeAt(0);
        const encrCode = ((charCode - 65 - (keyCode - 65) + 26) % 26) + 65;
        res += String.fromCharCode(encrCode);
        keyIndex++;
      } else {
        res += char;
      }
    }
    return this.direction ? res : res.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
