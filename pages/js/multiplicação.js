var x = prompt("digite um número")
x = parseFloat(x)

var indice = 1;
          
while (indice <= 1000) {
document.write(x + " X "+ indice +" = "+
		 (x * indice) + " </br>")
indice = indice + 1;
}
document.write("Finalmente Acabou!")								
