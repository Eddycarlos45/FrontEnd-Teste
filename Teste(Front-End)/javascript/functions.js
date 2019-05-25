

/*Função para capturar data e hora atual do sistema */
function time() {
  today = new Date();
  h = today.getHours();
  m = today.getMinutes();
  document.getElementById('now-hour').innerHTML = h + ":" + m;
  setTimeout('time()', 500);
}

/*Função para converter data do sistema */
function DateNow() {
  today = new Date();
  dayName = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado")
  document.getElementById('date').innerHTML = dayName[today.getDay()] + " " + today.getDate();
}

/*Função do carrossel */
$(function () {
  $(".default .carousel").jCarouselLite({
    btnNext: ".default .next",
    btnPrev: ".default .prev"
  });
});


/*Função do botão de próximo dia */
function nextDay() {
  document.getElementById('date').innerHTML = "Amanhã"
}

/*Função da tabela de botões */
function funcao(id) {
  for (i = 0; i <= 24; i++) {
    if (id === i) {
      var hora = document.getElementById("btn" + i).value;
      var horaGrid = hora.replace("h", ":");
      /*Atribui o valor da hora selecionada */
      document.getElementById("hour").innerHTML = hora;
      /*Atribui o valor dos horarios da hora selecionada */
      document.getElementById("grid-hour1").innerHTML = horaGrid + "00";
      document.getElementById("grid-hour2").innerHTML = horaGrid + "15";
      document.getElementById("grid-hour3").innerHTML = horaGrid + "30";
      document.getElementById("grid-hour4").innerHTML = horaGrid + "45";


    }
  }
}
/*Mudar cor da grade de horários */
function gridColor(id) {
  var color;
  if (id == 1) {
    color = '#009ade';
  }
  if (id == 2) {
    color = '#ec0080';
  }
  if (id == 3) {
    color = '#ffea00';
  }
  document.getElementById("hour").style.backgroundColor = color;
  document.getElementById("item-grid1").style.border = '6px solid' + color;
  document.getElementById("item-grid2").style.border = '6px solid' + color;
  document.getElementById("item-grid3").style.border = '6px solid' + color;
  document.getElementById("item-grid4").style.border = '6px solid' + color;
  document.getElementById("item-grid1").style.borderTop = '0 none';
  document.getElementById("item-grid2").style.borderTop = '0 none';
  document.getElementById("item-grid3").style.borderTop = '0 none';
  document.getElementById("item-grid4").style.borderTop = '0 none';

}
/*Alterar a cor do botão quando clicado*/
function item_back_color(iditem, idcolor) {
  for (i = 0; i <= 24; i++) {
    if (iditem === i) {
      if (idcolor == 1) { document.getElementById("btn" + i).style.backgroundColor = '#009ade'; }
      if (idcolor == 2) { document.getElementById("btn" + i).style.backgroundColor = '#ec0080'; }
      if (idcolor == 3) { document.getElementById("btn" + i).style.backgroundColor = '#ffea00'; }
    }
     
  }
}