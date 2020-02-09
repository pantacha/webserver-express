
const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('capitalizar', (name) => {
    let words = name.split(' ');
    words.forEach((word,idx) => {
        words[idx] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    return words.join('');
});
app.set('view engine', 'hbs');

app.get('/', (req, resp) => {

    resp.render('home', {
        name: 'yippi'
    });
    
})

app.get('/about', (req, resp) => {

    resp.render('about', {
       
    });

})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})