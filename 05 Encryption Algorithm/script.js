(function() {
    let encryptionKey;
    let iv;

    // On click event listeners for functions; encrypt, decrypt & reset
    document.getElementById("encryptBtn").addEventListener("click", encrypt); 
    document.getElementById("decryptBtn").addEventListener("click", decrypt);
    document.getElementById("resetBtn").addEventListener("click", reset);
    
    function encrypt() { // Encrypt userinput plaintext in ID:cipherText
        encryptionKey = CryptoJS.lib.WordArray.random(256/8);
        iv = CryptoJS.lib.WordArray.random(128/8);

        const plainText = document.getElementById("plainText").value; // get plaintext from userinput in textarea
        const encrypted = CryptoJS.AES.encrypt(plainText, encryptionKey, {iv: iv}); // encrypt plaintext with AES, parse key and plaintext as args
        const encryptedString = encrypted.toString();
        document.getElementById("cipherText").value = encryptedString; // set ciphertext as encrypted plaintext
    }
    
    function decrypt() { // Decrypt userinput plaintext in ID:decryptedText
        const cipherText = document.getElementById("cipherText").value; // Get ciphertext from ID:cipherText
        const decrypted = CryptoJS.AES.decrypt(cipherText, encryptionKey, {iv: iv}).toString(CryptoJS.enc.Utf8); // Use ciphertext and key to decrypt plaintext via AES, encode decrypted plaintext
        document.getElementById("decryptedText").value = decrypted; // Set ID:decryptedText as ciphertext 
    }

    function reset() {
        let encryptedText = document.getElementById("plainText");
        let cipherText = document.getElementById("cipherText");
        let decryptedText = document.getElementById("decryptedText");
        
        encryptedText.value = "";
        cipherText.value = "";
        decryptedText.value = "";
    }   
    
})();




