function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

   
    if (username === 'user' && password === 'password') {
       alert("success")
        return true;
    } else {
        
        const errorMessage = document.getElementById('error-message');
        errorMessage.classList.remove('hidden');
        return false;
        alert("Invlaid user & passrord")
    }
}
