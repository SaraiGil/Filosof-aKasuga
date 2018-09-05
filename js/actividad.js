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
			alert("Excelente");
		}
		else
		{
			if (elResultadoEs >= 5.9)
			{
				alert("Muy bueno");
			}
			else
			{
				if (elResultadoEs >= 2.9)
				{
					alert("Bueno");
				}
				else
				{
					if (elResultadoEs >= 0)
					{
						alert("Neutral");
					}
					else
					{
						if (elResultadoEs >= -3)
						{
							alert("Malo");
						}
						else
						{
							if (elResultadoEs >= -6)
							{
								alert("Muy Malo");
							}
							else
							{
								if (elResultadoEs >= -9)
								{
									alert("Pesimo");
								}
							}
						}
					}
				}
			}
		}
	}
}