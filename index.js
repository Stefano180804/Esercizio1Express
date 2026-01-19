const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const arrayGlobale = [0,1];

app.get('/', (req, res) => {
    res.send('Esercizio 1 Express Manipolazione Array')
})

// GET Handler che restituisce l'array globale
app.get('/array', (req, res) => {
    res.send(arrayGlobale)
})

// GET Handler che restituisce un singolo elemento dell'array tramite indice
// + gestione errori
app.get('/array/:indice', (req, res) => {
    const indice = Number(req.params.indice)
    
    if (isNaN(indice) || (indice < 0 || indice >= arrayGlobale.length)) {
        return res.send("L'indice deve essere un numero e deve essere compreso nell'array!")
    }
    
    return res.status(200).json({
        value :  arrayGlobale[indice]
    })
})

// POST Handler che inserisce un elemento nell'array
// + gestione errori
app.post('/array', (req, res) => {
    const value = req.body

    if(value === undefined){
        return res.send("Devi inserire un valore!")
    }

    arrayGlobale.push(value)

    res.json({
        message : "Elemrnto aggiunto con successo!",
        array : arrayGlobale
    })

})

// PUT Handler che modifica un elemento all'interno dell'array
// + gestione errori
app.put('/array/:indice', (req, res) => {
    const indice = req.params.indice
    const nuovoValore = req.body

    if (isNaN(indice) || (indice < 0 || indice >= arrayGlobale.length)) {
        return res.send("L'indice deve essere un numero e deve essere compreso nell'array!")
    }

    arrayGlobale[indice] = nuovoValore

    return res.status(200).json({
        message: "Elemento aggiornato con successo",
        array: arrayGlobale
    })
})

// DELETE Handler che elimina un elemento dell'array
// + gestione errori
app.delete('/array/:indice', (req, res) => {
    const indice = req.params.indice

    if (isNaN(indice) || (indice < 0 || indice >= arrayGlobale.length)) {
        return res.send("L'indice deve essere un numero e deve essere compreso nell'array!")
    }

    const elementoEliminato = arrayGlobale.splice(indice, 1)

    return res.status(200).json({
        message: "Elemento eliminato con successo",
        array: arrayGlobale
    })
})

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}
        http://localhost:3000`)
})
