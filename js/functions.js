$(document).ready(function(){
    $('#fade').slideDown(1000); // Isso fará o elemento aparecer gradualmente ao longo de 1 segundo (1000 milissegundos)
});

$(document).ready(function(){
    $('#slide').fadeIn(1000); // Isso fará o texto aparecer gradualmente ao longo de 1 segundo (1000 milissegundos)
});


$(function(){
    new Carousel(document.getElementById("anna"), {
        Autoplay : {
          timeout : 3000
        }
    
      }, {
        Autoplay
      });

    })

    $(function(){
        $('#read_button').click(function(){
            var compact = $('.compact');
            compact.toggleClass('active');
    
            if (compact.hasClass('active')) {
                // Altera o texto do botão se tiver a classe 'active'
                return $('#read_button').text('Leia menos');
            }
            
            // Altera o texto do botão se não tiver a classe 'active'
            $('#read_button').text('Leia mais');
        })
    })
    