/***************
javascript
****************/
var table; // indica la tabella
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

/**
* Controlla se il numero di elementi è minore della quantità massima impostata
* @return true se è minore
* @return false se non è maggiore
*/
function controlloMaxElem(){
	if(table.rows.length <= document.getElementById("iMaxElem").value)
		return true;
	else
		return false;	
}

/**
* Controlla se il numero di elementi massimi selezionato è minore del nimero di elementi della tabella
* @param {Object} oggetto che indica il rispettivo campo di input
*/
function impostaMaxElem(oggetto){
	var numElem = table.rows.length-1;//-1 per via dell'intestazione
	if(oggetto.value < numElem || !isNumeric(oggetto.value)){
		alert("Hai inserito un limite minore della quantità di elemeti, oppure hai inserito un valore non valido. \nVerrà impostato il valore di default");
		oggetto.value = 30;//masssimo numero di elementi
	}
	document.getElementById("scrittaMaxElem").innerHTML = "Limite elementi massimi: " + oggetto.value;
}

/**
* Aggiunge un riga alla tabella e 2 colonne (una per l'item e una per la quantità)
*/
function aggiungiRiga(){
	var row = table.insertRow(-1);
	row.insertCell(0);
	row.insertCell(1);
}

/**
* Aggiunge l'elemento alla tabella
* @param {Object} iItem che indica il rispettivo campo di input
* @param {Object} iQuantita che indica il rispettivo campo di input
* @param {Integer} posizione che indica la posizione dova va inserita l'item
*/
function aggiungiElemento(iItem,iQuantita,posizione){
	var valore = 0;
	if(posizione == -1){
		posizione = table.rows.length -1;
		valore = parseInt(iQuantita.value);	
	}
	else{
		valore = parseInt(table.rows[posizione].cells[1].innerHTML) + parseInt(iQuantita.value);
	}
	table.rows[posizione].cells[0].innerHTML = iItem.value;	
	table.rows[posizione].cells[1].innerHTML = valore;
}

/**
* Controlla se l'item è gia presente nella tabell
* @param {Object} iItem che indica il rispettivo campo di input
* @return val indica la posizione
* @return -1 se non è presente
*/
function controlloElemento(iItem){
	var val = -1;
	for(var i=0;i<table.rows.length;i++){
		if (table.rows[i].cells[0].innerHTML == iItem.value){
			val = i;	
		}
	}
	return val;
}

/**
* Inizializza la tabella con 2 item
*/
function init(){
	table = document.getElementById("tabella");
	aggiungiRiga();
	table.rows[1].cells[0].innerHTML = "item 1";	
	table.rows[1].cells[1].innerHTML = 1;
	aggiungiRiga();
	table.rows[2].cells[0].innerHTML = "item 2";	
	table.rows[2].cells[1].innerHTML = 5;
}

/**
* Funzione che permette di aggiungere i valori all'interno della tabella	
* @param {Object} iItem che indica il rispettivo campo di input
* @param {Object} iQuantita che indica il rispettivo campo di input
*/
function esegui(iItem,iQuantita){
	var posizione = controlloElemento(iItem);
	var ok = controlloItem(iItem) && controlloQuantita(iQuantita) && (controlloMaxElem() || posizione !=-1); //deve superare tutti i controlli
	if(ok){
		if(posizione == -1){
			aggiungiRiga();
		}
		aggiungiElemento(iItem,iQuantita,posizione);
	}
	modulo.reset();
	controlloUploader();
}
