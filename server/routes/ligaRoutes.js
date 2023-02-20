const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Liga = require('../models/liga');

//Vracanje svih liga
router.get('/', async(req, res) => {
    try{
        const lige = await Liga.find({});
        res.send(lige);
    } catch(err){
        res.status(500).send(err);
    }
});

//Vracanje odredjene lige po id-ju
router.get('/:id', async(req, res) =>{
    const id = req.params.id;
    try{
        const liga = await Liga.findById(id);
        if(!liga){
            return res.status(404),send();
        }
        res.send(liga);
    } catch(err){
        res.status(500).send(err);
    }
});

// Kreiranje nove lige
router.post('/', async (req, res) => {
    const novaLiga = new Liga(req.body);
    try{
      await novaLiga.save();
      res.status(201).send(novaLiga);
    } catch(err){
      res.status(400).send(err);
    }
  });

// Izmena postojece lige
router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const dozvoljenePoljaZaIzmenu = ['naziv', 'urlSlike', 'konferencije'];
    const poljaZaIzmenu = Object.keys(req.body);
    const nedozvoljenePoljaZaIzmenu = poljaZaIzmenu.filter(polje => !dozvoljenePoljaZaIzmenu.includes(polje));
  
    if(nedozvoljenePoljaZaIzmenu.length > 0) {
      return res.status(400).send({ err: `Polja ${nedozvoljenePoljaZaIzmenu} nisu dozvoljena za izmenu.` });
    }
  
    try{
      const liga = await Liga.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
      if(!liga) {
        return res.status(404).send();
      }
      res.send(liga);
    } catch(err){
      res.status(400).send(err);
    }
  });

  // Brisanje postojećee lige
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try{
      const liga = await Liga.findByIdAndDelete(id);
      if(!liga){
        return res.status(404).send();
      }
      res.send(liga);
    } catch(err){
      res.status(500).send(err);
    }
  });

module.exports = router;