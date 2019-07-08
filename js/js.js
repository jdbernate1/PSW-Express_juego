var categorias = [
	"Cosas Blancas",
	"Animales",
	"Ciudades/Paises",
	"Colores",
	"Frutas",
	"Cosas del Baño",
	"Medios de transporte",
	"El Mar",
	"El bosque",
	"Cantantes/Bandas",
	"Peliculas",
	"Novelas TV",
	"Libros/Autores",
	"Personajes Ficción",
	"Plantas",
	"Tecnología",
	"Comidas",
	"Deportes",
	"Personajes Historicos",
	"Elementos deportivos",
	"Prendas de Ropa",
	"Maquillaje",
	"Barrios",
	"Animales Domesticos",
	"Criaturas Miticas",
	"Mitología",
	"Vehiculos",
	"Cosas Amarillas",
	"Cosas Naranjas",
	"Cuerpo",
	"Profesiones",
	"Lugares en la ciudad",
	"Flores",
	"Arboles",
	"Cosas de cristal",
	"Cosas de papel",
	"Cosas Cuadradas",
	"Cosas de bolsillo"
	]

var letras_ = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

function numRandom(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function letra(){
	var largo = letras_.length-1;
	var num= numRandom(0,largo);
	return letras_[num];

}

function categoria(){
	var largo = categorias.length;
	var num= numRandom(0,largo);
	return categorias[num];

}

function cambiarLetra_Categoria(){
  var letra1 = document.getElementById("letra1");
  var letra2 = document.getElementById("letra2");
  var letra3 = document.getElementById("letra3");
  var letra4 = document.getElementById("letra4");
  var cat1 = document.getElementById("cat1");
  var cat2 = document.getElementById("cat2");
  var cat3 = document.getElementById("cat3");
  var cat4 = document.getElementById("cat4");

  letra1.innerHTML=letra();
  letra2.innerHTML=letra();
  letra3.innerHTML=letra();
  letra4.innerHTML=letra();
  cat1.innerHTML=categoria();
  cat2.innerHTML=categoria();
  cat3.innerHTML=categoria();
  cat4.innerHTML=categoria();

}

var seconds=60;
var timer;

function act_reloj(){
	var time =document.getElementById("timer"); 
	time.innerHTML="1:00"
}

function reloj() {
  if(seconds < 60) { // I want it to say 1:00, not 60
    document.getElementById("timer").innerHTML = seconds;
  }
  if (seconds >0 ) { // so it doesn't go to -1
     seconds--;
  } else {
     clearInterval(timer);
     swal({
	    text: "Tiempo",
	}).then(() => {
		act_reloj();
	});
  }
}

function conteo(){
	    timer = window.setInterval(function() { 
	      reloj();
	    }, 1000); // every second
	  }


function iniciar(){
	cambiarLetra_Categoria();
	conteo();
}