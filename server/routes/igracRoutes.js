const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Igrac = require('../models/igrac');

router.get('/', router.get('/', async (req, res) => {
    try{
        const igraci = await Igrac.find({});
        res.status(200).send(igraci);
    } catch (err){
        res.status(500).send(err);
    }
}));
router.get('/:id', async (req, res) =>{
    const id = req.params.id;
    try{
        const igrac = await Igrac.findById(id);
        if(!igrac){
            return res.status(404).send();
        }
        res.status(200).send(igrac);
    } catch(err){
        res.status(500).send(err);
    }
});

router.post('/', async (req, res) => {
    const noviIgrac = new Igrac(req, body);
    try{
        await noviIgrac.save();
        res.status(201).send(noviIgrac);
    }catch(err){
        res.status(400).send(err);
    }
});

// Izmen postojeceg igraca
router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const dozvoljenaPoljaZaIzmenu = ['ime', 'prezime', 'brDresa', 'urlSlike'];
    const poljaZaIzmenu = Object.keys(req.body);
    const nedozvoljenePoljaZaIzmenu = poljaZaIzmenu.filter(polje => !dozvoljenaPoljaZaIzmenu.includes(polje));
    if(nedozvoljenePoljaZaIzmenu.length > 0) {
        return res.status(400).send({ err: `Polje ${nedozvoljenePoljaZaIzmenu} nisu dozvoljena za izmenu` });
    }

    try{
        const igrac = await Igrac.findByIdAndUpdate(id, req.body, {new: true, runValidators: true});
        if(!igrac){
            return res.status(404).send();
        }
        res.send(igrac);
    }catch(err){
        res.status(400).send(err);
    }
});

//Brisanje postojeceg igraca
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const igrac = await Igrac.findByIdAndDelete(id);
        if(!igrac){
            return res.status(404).send();
        }
        res.send(igrac);
    } catch(err){
        res.status(500).send(err);
    }
});

module.exports = router;