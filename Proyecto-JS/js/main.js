$(document).ready(function(){
    //Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 600
      });

      //post
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
});