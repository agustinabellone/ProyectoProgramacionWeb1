
//Menu Responsive

$(document).ready(main);

var contador = 0;

function main(){
    $('.fas').click(function(){
        if(contador==1){
            $('nav').animate({
               left:'0'
            });
            contador = 0;
        } else{
            $('nav').animate({
                left:'100%'
            });  
            contador = 1;          
        }
    }
 )};