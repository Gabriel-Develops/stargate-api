const express = require('express')
const app = express()

const characters = {
    "Jack O'Neil": {
        'Name': "Jack O'Neil",
        'Portrayed by': "Richard Dean Anderson",
        'Quote': "We came in peace, and we expect to go in one... piece."
    },
    "Samantha Carter": {
        'Name': 'Samantha Carter',
        'Portrayed by': 'Amanda Tapping',
        'Quote': 'Scientists have theorized that there are an infinite number of dimensions, each containing a different possible version of reality.'
    },
    "Teal'c": {
        'Name': "Teal'c",
        'Portrayed by': "Christopher Judge",
        'Quote': "I am unfamiliar with that term, O'Neill."
    },
    "Daniel Jackson": {
        'Name': "Daniel Jackson",
        'Portrayed by': "Michael Shanks",
        'Quote': "You know, I've never been on a stakeout before. Shouldn't we have donuts or something?"
    }
}

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/Jack', (req, res) => res.redirect("/Jack_O'Neil"))
app.get("/Jack_O'Neil", (req, res) => {
    res.json(characters["Jack O'Neil"])
})

app.get('/Samantha', (req, res) => res.redirect('/Samantha_Carter'))
app.get('/Samantha_Carter', (req, res) => {
    res.json(characters["Samantha Carter"])
})

app.get("/Teal'c", (req, res) => {
    res.json(characters["Teal'c"])
})

app.get('/Daniel', (req, res) => res.redirect('/Daniel_Jackson'))
app.get('/Daniel_Jackson', (req, res) => {
    res.json(characters["Daniel Jackson"])
})

const PORT = process.env.PORT || 5462
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})