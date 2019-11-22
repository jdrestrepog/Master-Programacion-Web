$(document).ready(function(){
    //Slider
    if(window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 600
          });
    }
      //post
    if(window.location.href.indexOf('index') > -1){

      var posts = [
          {
              title: 'Prueba titulo 1',
              date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sapiente nostrum consectetur. Doloremque minus consequuntur culpa repellat! Magnam officiis tempora ipsum nemo, quod ratione, rerum magni vero debitis expedita harum.',
          },
          {
              title: 'Prueba titulo 2',
              date:  'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sapiente nostrum consectetur. Doloremque minus consequuntur culpa repellat! Magnam officiis tempora ipsum nemo, quod ratione, rerum magni vero debitis expedita harum.',
          },
          {
            title: 'Prueba titulo 3',
            date:  'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sapiente nostrum consectetur. Doloremque minus consequuntur culpa repellat! Magnam officiis tempora ipsum nemo, quod ratione, rerum magni vero debitis expedita harum.',
          },
          {
              title: 'Prueba titulo 4',
              date:  'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sapiente nostrum consectetur. Doloremque minus consequuntur culpa repellat! Magnam officiis tempora ipsum nemo, quod ratione, rerum magni vero debitis expedita harum.',          
          },
          {
            title: 'Prueba titulo 5',
            date:  'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sapiente nostrum consectetur. Doloremque minus consequuntur culpa repellat! Magnam officiis tempora ipsum nemo, quod ratione, rerum magni vero debitis expedita harum.',          
        },          
      ];

      posts.forEach((item, index)=>{
        var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <a href="#" class="button-more">Leer más</a>
            </article>
            `;
        
            $("#posts").append(post);
      });
    }
      //Selector de temas
      var theme = $("#theme");
      $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
      });
      $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
     });
    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });   
    
    //Scroll arriba de la web
    $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    //Login falso
    $("#login form").submit(function(){
        var form_nane = $("#form_name").val();
        localStorage.setItem("form_name", form_nane);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");
        $("#about p").html("<br><hr><strong>Bienvenido, " + form_name + "</strong>");
        about_parrafo.append("<a href='#' id='logout'> Cerrar Sesión</a>");

        $("#logout").click(function(){
            localStorage.clear();
            location.reload(true);
        });
        $("#login").hide();
    }

    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }
});