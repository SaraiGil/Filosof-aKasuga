function darResultado()
{
	puntuacion = 0;
	showResult = true;
	for (x = 1; x <= 10; x++)
	{
		somethingIsChecked = false;
		for (y = 1; y <= 7; y++)
		{
			if (!somethingIsChecked && document.getElementById('p' + x + 'c' + y).checked)
			{
				puntuacion = puntuacion + Number(document.getElementById('p' + x + 'c' + y).value);
				somethingIsChecked = true;
			}
			if (y == 7 && !somethingIsChecked)
			{
				showResult = false;
			}
		}
	}
	if (showResult)
	{
		return puntuacion;
	}
	else
	{
		return null;
	}
}

function verResultado()
{
	elResultadoEs = darResultado();
	if (elResultadoEs == null)
	{
		alert("Completa todas las preguntas");
	}
	else
	{
		if (elResultadoEs >= 9)
		{
			alert("Excelente. Sigue trabajando de esa manera.");
		}
		else
		{
			if (elResultadoEs >= 5.9)
			{
				alert("Vas por muy buen camino, sigue mejorando como persona y llega al exito.");
			}
			else
			{
				if (elResultadoEs >= 2.9)
				{
					alert("Sigue mejorando, cada día vas mejorando, y el camino por el que avanzas te llevará a muchas cosas buenas. Sigue así.");
				}
				else
				{
					if (elResultadoEs >= 0)
					{
						alert("Hay que seguir mejorando, hay muchas cosas que deben de mejorarse, explora que más puedes hacer leyendo el contenido de la página y ponlo en practica.");
					}
					else
					{
						if (elResultadoEs >= -3)
						{
							alert("Poco a poco puedes ir mejorando, revisa los puntos aquí señalados y empieza a practicarlos.");
						}
						else
						{
							if (elResultadoEs >= -6)
							{
								alert("El camino que sigues no es muy prometedor, sin embargo, aun se puede empezar a mejorar.");
							}
							else
							{
								if (elResultadoEs >= -10)
								{
									alert("Algo malo está pasando, hay que empezar a cambiar los habitos que tienes por mejores habitos para crecer como persona. Tú puedes.");
								}
							}
						}
					}
				}
			}
		}
	}
}