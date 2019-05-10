
var number=0;

$("#Dodaj").click(function(){
    number++;
    if(number>15){
        alert("Osiągnięto maximum zadań");
    }
    else{
        $("#taskList").append("<div class=\"task\" id="+"Zadanie"+number+">"+"Task number "+number+"</div>");
    }
  });
  $("#Usun").click(function(){
      if(number<1){
        alert("Usunięto wszyskie zadania!");
      }
      else{
        $("#Zadanie"+number).remove();
        number--;
      }
  });

  $("#Wyczysc").click(function(){
    for(var i=0;i<=number; i++){
        $("#Zadanie"+i).remove();
    }
    number=0;
})