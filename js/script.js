document.getElementById('LoginForm').addEventListener('submit', function(event){
    event.preventDefault();
  
    const correctUsername = "Anton";
    const correctPassword = "Skibidi";
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if(username == correctUsername && password == correctPassword){
        alert("Login Berhasil")
        window.location.href = 'index.html';
    }else{
        alert("Username atau password salah")
    }
  });   
  
  document.getElementById('togglePassword').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
  });