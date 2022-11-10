const _URL = "http://localhost:5000/amigos";

$('#boton').click( () => {
    $.get(_URL)
    .done(function( data ) {
        const list = $('#lista');
        list.empty();
        $.each( data, function( key, val ) {
          list.append( "<li id='" + key + "'>" + val.name + " X"+"</li>" );
        })
    });
  });

$('#search').click( () => {
    $.get(_URL+'/'+$('#input').val())
    .done((data) => $("#amigo").text(data.name));
});

$('#delete').click( () => {
    $.delete(_URL+'/'+$('#inputDelete').val())
    .done( (url, type, success) => {
        if (success.status === 200) $("#success").text("Tu amigo fue borrado con éxito");
    });
});

$.delete = (url, callback) => {
    return $.ajax({
      url: url,
      type: 'DELETE',
      success: callback
    });
  };