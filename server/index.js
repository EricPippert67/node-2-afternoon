const express=require('express');
const app=express();
const mc=require('./controllers/messages_controller');
const messageBaseUrl='/api/messages';
app.use(express.json());
app.use(express.static(__dirname+'/../public/build'));

app.post(messageBaseUrl, mc.create);
app.get(messageBaseUrl,mc.read );
app.put(`${messageBaseUrl}/:id`, mc.update);
app.delete(`${messageBaseUrl}/:id`,mc.delete);





const port=3001;
app.listen(port, ()=> console.log(`server running on port ${port}`));
