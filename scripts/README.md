Come impostare un alias per la propria shell o bash.

In questo caso proviamo ad impostare un alias per semplificare l'esecuzione di uno script presente in una directory specifica.

eseguire il comando : sudo cat /etc/passwd (utiliziamo questo comando per capire che tipo di bash / shell adopera il nostro sistema operativo.

Una volta trovata la propria shell / bash dobbiamo modificare il file di configurazione.
Utilizziamo quindi il comando 'vi [file_di_configuazione]' oppure tramite visual studio code 'code [file_di_configurazione]'

Una volta entrati andiamo al termine della pagina ed inseriamo manualmente il nostro alias.

Esempio:

alias cn='~/4INFO_2122/scripts/consegna.sh'

fare attenione alla sintassi. (in caso di errore una volta riavviata la bash/shell apparira' un errore alla prima linea)

Una volta scritto il proprio alias si potra' usare ovunque!
