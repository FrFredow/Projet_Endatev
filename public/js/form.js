

$('form').on('submit', (e)=> {
    e.preventDefault();

    const nom = $('#Nom').val().trim();
    const prenom = $('#Prenom').val().trim();
    const email = $('#email').val().trim();
    const mobile = $('#Mobile').val().trim();
    const object = $('#Objet').val().trim();
    const message = $('#Message').val().trim();

    const data = {
        nom,
        prenom,
        email,
        mobile,
        object,
        message
    };

    $.post('/email', data, function() {
        console.log('Server received our data');
    });
});;