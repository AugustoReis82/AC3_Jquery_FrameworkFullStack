$('#envio').click( function(e) {
    e.preventDefault()
    let nome = $('[name=nome-aluno]').val()
    let email = $('[name=email-aluno]').val()
    let backNome = $('[name=resp-nome]')
    let backEmail = $('[name=resp-email]')

    let aluno = {
        nome: nome,
        email: email
    }

    if(nome.length == 0 || email.length == 0 ){
        backNome.val('preencha todos os campos')
        return
    }

    $.ajax(
        {
            type: 'POST',
            url: '/recebe-json',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(aluno),
            success: function(callback) {
                console.log(callback)
                backNome.val('Nome Recebido: ' + callback.nome)
                backEmail.val('E-mail Recebido:: ' + callback.email)
                nome.val('')
                email.val('')
            },
            error: function() {
                $(this).html("error!")
            }
        }
    )
})