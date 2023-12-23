function checkPassword() {
    var passwordInput = document.getElementById('password');
    var messageElement = document.getElementById('message');

    // Vérifie le mot de passe (ici, le mot de passe est "mama")
    if (passwordInput.value === 'mama') {
        // Affiche un message de validation en cas de mot de passe correct
        messageElement.textContent = 'Mot de passe correct. Vous êtes sauvé !';
    } else {
        // Affiche un message d'erreur en cas de mot de passe incorrect
        messageElement.textContent = 'Mot de passe incorrect. Un Nass ou t\'es morte !';
    }
}
