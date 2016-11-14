/***************
javascript
****************/

var visibile = false; // indica se la parte di input è visibile
/**
* Funzione per la gestione della comparsa e scomparsa dei campi di input
*/
function controlloUploader(){
	if(visibile)
		document.getElementById("campiInserimento").className = "invisibile"; //rendo invisibile
	else
		document.getElementById("campiInserimento").className = "visibile"; // rendo visibile
	visibile=!visibile;
}

/**
* Controlla se il campo di input dell'item è valido
* @param {Object} oggetto che indica il rispettivo campo di input
* @return true se è valido
* @return false se non è valido
*/
function controlloItem(oggetto){
	if(oggetto.value!="")
		return true;
	else
		return false;	
}

/**
* Controlla se la stringa inviata è un numero
* @param {String} n indica la stringa da controllare
* @return true se è un numero
* @return false se non è un numero
*/
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
* Controlla se il campo di input della quantità è valido
* @param {Object} oggetto che indica il rispettivo campo di input
* @return true se è valido
* @return false se non è valido
*/
function controlloQuantita(oggetto){
	if(oggetto.value!="" && isNumeric(oggetto.value))
		return true;
	else
		return false;	
}