let data = [
    { id: 1, title: 'Create a project', order: 1, completed: true, createdOn: new Date() },
    { id: 2, title: 'Take a cofféé', order: 2, completed: true, createdOn: new Date() },
    { id: 3, title: 'Write new article', order: 3, completed: true, createdOn: new Date() },
    { id: 4, title: 'Walk toward home', order: 4, completed: false, createdOn: new Date() },
    { id: 5, title: 'Have some dinner', order: 5, completed: false, createdOn: new Date() }
];

console.log(data);



const express = require('express');
const https = require('https');
const express = require('express');
const app = express()
const router = express.Router();
// const dataRouter = require('./data.json');

app.use(express.json());


//get data
app.get('/', (req, res) => {
    res.status(200).json(data);

})

app.get('/:id', (req, res) => {
    const dataId = Number(req.params.id);
    const getDataId = data.find((item) => item.id === dataId);

    if (getDataId) {
        res.status(200).json(getDataId);
    } else {
        res.sendStatus(404);
    }
})

app.post('/', (req, res) => {
    const addData = req.body;
    data.push(addData);
    res.json(data);
})

app.put('/:id', (req, res) => {
    const dataId = Number(req.params.id);
    const body = req.body;
    const dataContent = data.find((dataContent) => dataContent.id === dataId);
    const index = data.indexOf(dataContent);
    if (!dataContent) {
        res.status(500).send('Account not foound.');
    } else {
        const updatedData = { ...dataContent, ...body };
        data[index] = updatedData;
        res.send(updatedData);
    }
})

app.delete('/:id',(req,res)=>{
    const dataId = Number(req.params.id);
    const newData = data.filter((dataContent)=> dataContent.id != dataId);

    if(!newData){
        res.status(500).send('Account not found.');
    } else{
        data = newData;
        res.send(data);
    }
}).listen(3001, () => {
        console.debug('Server listening on port ');
    })





// module.exports = router;