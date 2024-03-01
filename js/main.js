$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000')

    $('#cpf').mask('000.000.000-00')

    $('#codigoPostal').mask('00000-000')

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            codigoPostal: {
                required: true
            },
            cidade: {
                required: true
            }
        },
        messages:{
            nome: 'Digite o seu nome completo',

            email: 'Digite o seu email',

            telefone: 'Seu número seguido do DDD',

            cpf: 'Seu cpf sem pontos e traços',

            endereco: 'Digite seu endereço completo',

            codigoPostal: 'Codigo sem pontos e traços',

            cidade: 'Digite sua cidade'
        },
       
       
    })
})
