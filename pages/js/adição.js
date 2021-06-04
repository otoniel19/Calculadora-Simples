var x = prompt("digite um número")
x = parseInt(x)

var indice = 1
while (indice <= 1000) {
				document.write(x + " + "+ indice +" = "+
								(x + indice) + " </br> ")
			indice = indice + 1;
}
document.write("Finalmente Acabou!")