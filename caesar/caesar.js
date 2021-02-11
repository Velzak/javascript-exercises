const caesar = function (str, shift) {
  return str
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
};

//deciphering if char is upper or lowercase in unicode
const codeSet = code => (code < 97 ? 65 : 97)

//allowing for negative numbers to work using modulo
const mod = (n,m) => (n % m + m) % m

const shiftChar = (char, shift) => {
    const code = char.charCodeAt()

    if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
        return String.fromCharCode(
            mod(code + shift - codeSet(code), 26) + codeSet(code)
        )
    }
    return char
}

module.exports = caesar;
