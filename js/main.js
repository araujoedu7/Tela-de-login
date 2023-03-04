function enviar(){
    localStorage.nome = document.getElementById("username").value;
    localStorage.senha = document.getElementById("password").value;
}


const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  if (username.trim() === '') {
    alert('Por favor, informe o usuário.');
    event.preventDefault();
  }

  if (password.trim() === '') {
    alert('Por favor, informe a senha.');
    event.preventDefault();
  }
});


const save = document.querySelector('form3');

form3.addEventListener('submit', (event) => {
  const saveUser = document.querySelector('#saveUser').value;
  const saveSenha = document.querySelector('#saveSenha').value;

  if (saveUser.trim() === '') {
    alert('Por favor, informe o usuário.');
    event.preventDefault();
  }

  if (saveSenha.trim() === '') {
    alert('Por favor, informe a senha.');
    event.preventDefault();
  }
});

