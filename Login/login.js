function submitForm() {
    const name = document.getElementById('nameUser').value;
    const email = document.getElementById('emailUser').value;
    const password = document.getElementById('passwordUser').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (name && email && password && confirmPassword) {
        if (emailIsValid(email) && passwordsMatch(password, confirmPassword)) {
            saveUser(name, email, password);
            alert('Usuário salvo com sucesso!');
            redirectToLogin();
            // Adicionar redirecionamento ou outras ações aqui          
    } else {
        // errorMessage.innerHTML =;
        alert(' Ops, parece que tem algo errado com suas informações')
    }
}}

function emailIsValid(email) {
    // Adicione sua lógica de validação de email aqui
    // Retorna true se o email for válido, false caso contrário
    return true;
}

function passwordsMatch(password, confirmPassword) {
    return password === confirmPassword;
}

function saveUser(name, email, password) {
    // Adicione lógica para salvar o usuário (pode ser uma chamada de API, banco de dados, etc.)
}

function redirectToLogin() {
    // Redirecionar para a página de login após o cadastro bem-sucedido

window.location.href = "/ServiceUser/index.html";
}