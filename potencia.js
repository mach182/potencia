//Programa para elevar un numero n a una potencia p//
var n = 0;
var p = 0;
var i = 0;


n = prompt("Escoge tu numero base");
p = prompt("Escoge tu potencia");
alert("Tu numero base es " + n + "\nY tu potencia es " + p);

if ( n != 0 && n != 1)  //Pregunto si es diferente de 0 porque si es 0 la potencia termina siendo 0, el 1 igual.
	if ( p == 0) 
	{			 //Cualquier numero elevado a la potencia 0 es 1.
		n = 1;
	}
	else // IMPORTANTE, el else lleva a que se haga todo, tiene que estar todo entre llaves.
	{
		if (p < 0)
		{
			n = 1/n
			p = -p
		}

		i = n

		while(p != 1)
		{
			n = n  * i,

			p--
		}

	}
	

		
	alert("Tu numero es " + n); 
