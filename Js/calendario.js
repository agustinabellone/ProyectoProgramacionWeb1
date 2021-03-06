
//Calendario 
 
 document.addEventListener('DOMContentLoaded', function() {
          var calendarEl = document.getElementById('calendario');
  
          var calendar = new FullCalendar.Calendar(calendarEl, {
            plugins: [ 'dayGrid' ],
             locale:'es',
             events: [
               {
                 title:'Hepatitis B',
                 start: '2020-06-30'
               },
               {
                 title: 'Fiebre Amarilla',
                 start: '2020-07-15'
               },
               {
                 title: 'Hepatitis A',
                 start: '2020-08-04'
               },
               {
                 title: 'Gripe',
                 start: '2020-09-20'
               }
             ]
          });
  
          calendar.render();
        });

    