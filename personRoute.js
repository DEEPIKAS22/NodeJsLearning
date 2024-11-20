const express = require('express');
const router = express.Router();
const app = express();
const Person = require('./model/Person');

//CRUD Operations 
//Paramiterized API Call
//Express routing
router.post('/', async(req, res)=>{
    try{
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('Data saved!');
        res.status(200).json(response);
    }catch(err)
    {
        console.log(err);
        res.status(500).json({err: 'Internal server error!'});
    }
})

router.get('/:job', async(req, res)=>{
    try{
        const jobType = req.params.job;
        console.log(jobType);
        if(jobType == 'Doctor' || jobType == 'Engineer' || jobType == 'CA')
        {
            const response = await Person.find({Job: jobType});
            res.status(200).json(response);
        }else{
            res.status(404).json({error: 'Job Type not found!'});
        }
    }catch(err)
    {
        console.log(err);
        res.status(500).json({err: 'Internal server error!'});
    }
})

router.get('/', async(req, res)=>{
    try{
        const response = await Person.find();
        res.status(200).json(response);
    }catch(err){
        console.log('Internal server error!');
        res.status(500).json({err: 'Internal server error!'});
    }
})

router.delete('/:id', async(req, res)=>{
    try{
        const id = req.params.id;
        console.log(id);
        const response = await Person.findByIdAndDelete(id);
        if(!response)
        {
            return res.status(404).json({err: 'Id not found!'});
        }
        else{
            res.status(200).json({message : 'Account deleted successfully!'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({err: 'Internal server error!'});
    }
})

router.put('/:id', async(req, res)=>{
    try{
        const personId = req.params.id;
        const updatedData = req.body;
        const response = await Person.findByIdAndUpdate(personId, updatedData);
        if(!response)
        {
            return res.status(404).json({err: 'Id not found!'});
        }
        else{
            res.status(200).json({message : 'Account updated successfully!'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({err: 'Internal server error!'});
    }
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log('Server is listening  to port 3000!');
})
 
module.exports = router;