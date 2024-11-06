document.addEventListener('DOMContentLoaded', function() {
    // Función para registrar usuarios
    function registerUser(event) {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const userExists = users.find(user => user.email === email);
        if (userExists) {
            alert('El usuario ya está registrado.');
            return;
        }

        const newUser = { nombre, apellido, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        alert('¡Registro exitoso!');
        document.getElementById('formRegistro').reset();
        event.preventDefault();
    }

    const formRegistro = document.getElementById('formRegistro');
    if (formRegistro) {
        formRegistro.addEventListener('submit', registerUser);
    }

    const loginBtn = document.getElementById('inicio_Sesion');
    const loginVentana = document.getElementById('ventana_Login');
    const closeLogin = document.getElementById('close_Login');

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            loginVentana.style.display = 'block';
        });
    }

    if (closeLogin) {
        closeLogin.addEventListener('click', () => {
            loginVentana.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === loginVentana) {
            loginVentana.style.display = 'none';
        }
    });
});
