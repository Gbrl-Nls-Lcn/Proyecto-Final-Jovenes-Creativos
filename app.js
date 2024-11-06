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

// Abrir y Cerrar la ventana de Inicio de Sesión
const loginBtn = document.getElementById('inicio_Sesion');
const login_ventana = document.getElementById('ventana_Login');
const close_Login = document.getElementById('close_Login');

loginBtn.addEventListener('click', () => {
    login_ventana.style.display = 'block';
});

close_Login.addEventListener('click', () => {
    login_ventana.style.display = 'none';
});

document.getElementById('formRegistro').addEventListener('submit', registerUser);