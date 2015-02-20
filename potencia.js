//Programa para elevar un numero n a una potencia p//
var n = 0;
var p = 0;
var i = 0;


n = prompt("Escoge tu numero base");
p = prompt("Escoge tu potencia");
i = n
alert("Tu numero base es " + n + "\nY tu potencia es " + p);

if ( n == 0) 
	{ 			//La potencia de 0 siempre va a ser 0
	alert("Tu numero es " + n); 
	
	}
	else if ( n == 1) 
		{ 		//La potencia de 1 siempre va a ser 1
		alert("Tu numero es " + n);
		}

		else if ( p == 0) 
			{			 //Cualquier numero elevado a la potencia 0 es 1
				n = 1;
				alert("Tu numero es " + n);
			}
			else if (p < 0)
			 {
				
				while (p != -1)
				{
					n = n * i;
					alert(n);
					p++;
				}
			

			}

				// else if (true) {}
