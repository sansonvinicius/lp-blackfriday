const formCadastrar = document.getElementById('form-cadastrar')

formCadastrar.addEventListener('submit', (e) =>{
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let contactData = {
        nome,
        email
    }
    let convertData = JSON.stringify(contactData);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')
    let carregando = '<p>Cadastrando...</p>'
    let pronto = '<p>Acompanhe nossas promoções em seu email</p>'
    content.innerHTML = carregando;
    setTimeout(()=>{
        content.innerHTML = pronto;
    },800)
})