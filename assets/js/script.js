  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('#enviarCorreo').click(function (){ //aqui debes agregar el id al button para que funcione
    alert("El correo fue enviado correctamente...")
    });
    $('body').on('dblclick','h4',function () {
    $(this).css("color",'red');
    });
    $('.card-title').click(function(){
    $('.card-text').toggle();
    });
    })

    $(function(){
      var enviar = $("#enviar");
      enviar.click(function(){
        $(".Formulario").validate({
          errorPlacement:function(error, element){
            return true;
          },
          focusInvalid: true,
          focusCleanup: false,
          onkeyup : false,
          debug : false,
          submitHandler: function(form){
            // setup some local variables
                var $form = $(form);
                // let's select and cache all the fields
                var $inputs = $form.find("input, select");				    
                // serialize the data in the form
                var serializedData = $form.serialize();
    
                // let's disable the inputs for the duration of the ajax request
                $inputs.prop("disabled", true);
    
                // fire off the request to /enviar.php
                request = $.ajax({
                    url: "#",
                    type: "GET",
                    data: serializedData
                });
                  // callback handler that will be called on success
                request.done(function (response, textStatus, jqXHR) {
                  $(".Formulario").addClass("zoomOutRight");
                    $("#mensaje_Enviado").addClass('u-db animated fadeInDown');	
                });
                // callback handler that will be called on failure
                request.fail(function (jqXHR, textStatus, errorThrown) {
                    // log the error to the console
                    console.error(
                        "The following error occured: " + textStatus, errorThrown);
                });
    
                // callback handler that will be called regardless
                // if the request failed or succeeded
                request.always(function () {
                    // reenable the inputs
                    $inputs.prop("disabled", false);
                });
          },
          errorClass:"shake animated u-error",
          validClass:"",
          rules:{
            email : {
              required : true,
              email : true
            },
            nombre : {
              required : true,
              minlength: 4,
              maxlength: 10
            },
            ciudad : {
              required : true
            },
            
            telefono: {
              required: true,
              number: true,
              minlength: 5,
              maxlength: 12
            }						
          }			
        })
      });
    });