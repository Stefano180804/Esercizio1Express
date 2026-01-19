# Esercizio1Express
Esercizio 1 Express HTTP Methods

# Traccia
Creare un application server che contiene un array di stringhe vuoto come variabile globale:

1. aggiungere un handler GET sul path "array" che mi restituisce l'array globale.

2. aggiungere un handler GET sul path "array/{indice}" che controlla se l'array ha quell'indice e               restituisce l'elemento a quell'indice altrimenti restituisce un errore.

3. aggiungere un handler POST sul path "array" che gestisce un body formato JSON che contiene un campo value, nel quale puoi passare un qualsiasi elemento, lui lo inserisce nell'array con una push.

4. aggiungere un handler PUT sul path "array/{indice}" che gestisce un body formato JSON che contiene un campo value e controlla se l'array ha quell'indice e sostituisce l'elemento a quell'indice con quello appena passato 
altrimenti restituisce un errore.

5. aggiungete un handler DELETE sul path "array/{indice}" che controlla se l'array ha quell'indice e lo elimina con una splice  altrimenti restituisce un errore.