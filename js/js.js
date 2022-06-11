$(document).ready(function () {

    $('#btnSend').click(function () {

        var errores = '';


        //Validando campos==================================================

        if ($('#names').val() == '') {
            errores += '<p>Escriba un nombre </p>';
        }

        if ($('#email').val() == '') {
            errores += '<p>Escriba un Correo Electronico </p>';
        }
        if ($('#mensaje').val() == '') {
            errores += '<p>El mensaje no puede estar vacio </p>';
        }

        //Enviando mensajes==================================================
        if (errores == '' == false) {
            var mensajeModal = '<div class="modal_wrap">' +
                '<div class="mensaje_modal">' +
                '<h3>Existen errores:</h3>' +
                errores + '<span id="btnClose">Cerrar</span>' +
                '</div>' +
                '</div>'
            $('body').append(mensajeModal);
        }

        //Cerrando el Modal (Ventana emergente)===============================

        $('#btnClose').click(function () {

            $('.modal_wrap').remove();

        });


    });
})

