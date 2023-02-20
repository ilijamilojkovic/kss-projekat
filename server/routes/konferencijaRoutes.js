const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Konferencija = require('../models/konferencija');

//Vracanje svih konferencija
router.get('/', async (req, res) => {
    try{
      const konferencije = await Konferencija.find({});
      res.send(konferencije);
    } catch(err){
      res.status(500).send(err);
    }
  });

// Vracanje određene konferencije po id-ju
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try{
      const konferencija = await Konferencija.findById(id);
      if(!konferencija) {
        return res.status(404).send();
      }
      res.send(konferencija);
    } catch(err){
      res.status(500).send(err);
    }
  });

// Kreiranje nove konferencije
router.post('/', async (req, res) => {
    const novaKonferencija = new Konferencija(req.body);
    try{
      await novaKonferencija.save();
      res.status(201).send(novaKonferencija);
    } catch(err){
      res.status(400).send(err);
    }
  });

// Izmena postojece konferencije
router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const dozvoljenePoljaZaIzmenu = ['naziv', 'timovi'];
    const poljaZaIzmenu = Object.keys(req.body);
    const nedozvoljenePoljaZaIzmenu = poljaZaIzmenu.filter(polje => !dozvoljenePoljaZaIzmenu.includes(polje));
  
    if(nedozvoljenePoljaZaIzmenu.length > 0) {
      return res.status(400).send({ err: `Polja ${nedozvoljenePoljaZaIzmenu} nisu dozvoljena za izmenu.` });
    }
  
    try{
      const konferencija = await Konferencija.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
      if(!konferencija) {
        return res.status(404).send();
      }
      res.send(konferencija);
    } catch(err){
      res.status(400).send(err);
    }
  });

// Brisanje postojećeg tima
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try{
      const konferencija = await Konferencija.findByIdAndDelete(id);
      if(!konferencija){
        return res.status(404).send();
      }
      res.send(konferencija);
    } catch(err){
      res.status(500).send(err);
    }
  });

module.exports = router;