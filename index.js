import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import {fileURLToPath} from 'url';
import {getFortune}  from './fortune.js'

console.log(getFortune);
const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

// using handlebars as a templeting engine instead of Jade
// initialization of express instance
const app = express();
// handlebars.create({defaultLayout:'index'})
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views",  "./views");
app.use(express.static(__dirname+'/public'))



app.set('port',process.env.PORT||3000)
// // creating a new home route
app.get('/',function(req,res){
    // res.type('text/plain')
    // res.send('Meadwlark Travel')
    res.render('home')
})


// // create the About page route

app.get('/about',function(req,res){
    // res.type('text/plain')
    // res.send("About Meadwlark Travel")
    res.render('about',{fortune:getFortune()})
})

// custom 404 page

app.use(function(req,res){
    // res.type('text/plain');
    // res.send('404 - Not Found')
    res.status(404)
    res.render('404')
})

//  custom 500 page
app.use(function(err,req,res,next){
    console.error(err.stack);
    // res.type('text/plain');
    // res.send('500 - Server Error')
    res.status(500)
    res.render('500')

})




app.listen(app.get('port'),function(){
    console.log("Express started on http://localhost:"+app.get('port')+" ; press Ctrl-C to terminate");
})