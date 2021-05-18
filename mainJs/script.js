$(document).ready(function(){
    $( "#show" ).click(function(){
        $( ".diceDrop" ).animate({
        opacity: 1}, 1200 );
    });
    $("#hide").click(function() {
        $( ".diceDrop" ).animate({
            opacity: 0}, 1200 );
    });
    
    $("#dice100").click(d100)
    var d100clicker = 0;
   function d100(min, max) {
       min = Math.ceil(1);
       max = Math.floor(101);
       var x =  Math.floor(Math.random() * (max - min) + min);
       document.getElementsByTagName("li")[d100clicker].firstChild.data
       var ul = document.getElementById("d100");
       var li = document.createElement("li");
       if(x >= 96){
        li.setAttribute("class", "text-red-600 font-bold");
        li.appendChild(document.createTextNode(`Pech! (${x})` ));
        }
        else if (x==1) {
        li.setAttribute("class", "text-green-500 font-bold");
        li.appendChild(document.createTextNode(`Fuks!`));
        } else {
            li.appendChild(document.createTextNode(" " + x + ","));
        }
       ul.appendChild(li);
       d100clicker++;
    }

    $("#dice20").click(d20)
    function d20(min, max) {
        min = Math.ceil(1);
        max = Math.floor(21);
        var x =  Math.floor(Math.random() * (max - min) + min);
        document.getElementsByTagName("li")[0].firstChild.data
        var ul = document.getElementById("d20");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(" " + x + ","));
        ul.appendChild(li);
     }

     $("#dice10").click(d10)
     function d10(min, max) {
         min = Math.ceil(1);
         max = Math.floor(11);
         var x =  Math.floor(Math.random() * (max - min) + min);
         document.getElementsByTagName("li")[0].firstChild.data
         var ul = document.getElementById("d10");
         var li = document.createElement("li");
         li.appendChild(document.createTextNode(" " + x + ","));
         ul.appendChild(li);
      }

      $("#dice6").click(d6)
      function d6(min, max) {
          min = Math.ceil(1);
          max = Math.floor(7);
          var x =  Math.floor(Math.random() * (max - min) + min);
          document.getElementsByTagName("li")[0].firstChild.data
          var ul = document.getElementById("d6");
          var li = document.createElement("li");
          li.appendChild(document.createTextNode(" " + x + ","));
          ul.appendChild(li);
       }

       $("#dice3").click(d3)
       function d3(min, max) {
           min = Math.ceil(1);
           max = Math.floor(4);
           var x =  Math.floor(Math.random() * (max - min) + min);
           document.getElementsByTagName("li")[0].firstChild.data
           var ul = document.getElementById("d3");
           var li = document.createElement("li");
           li.appendChild(document.createTextNode(" " + x + ","));
           ul.appendChild(li);
        }
});