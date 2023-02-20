const express = require('express');
const router = express.Router();
const Tim = require('../models/tim');

// Vracanje svih timova
router.get('/', async (req, res) => {
  try{
    const timovi = await Tim.find({});
    res.send(timovi);
  } catch(err){
    res.status(500).send(err);
  }
});

// Vracanje određenog tima po id-ju
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try{
    const tim = await Tim.findById(id);
    if(!tim) {
      return res.status(404).send();
    }
    res.send(tim);
  } catch(err){
    res.status(500).send(err);
  }
});

// Kreiranje novog tima
router.post('/', async (req, res) => {
    const noviTim = new Tim(req.body);
    try{
      await noviTim.save();
      res.status(201).send(noviTim);
    } catch(err){
      res.status(400).send(err);
    }
  });
  
// Izmena postojeceg tima
router.patch('/:id', async (req, res) => {
  const id = req.params.id;
  const dozvoljenePoljaZaIzmenu = ['ime', 'igraci', 'urlSlike'];
  const poljaZaIzmenu = Object.keys(req.body);
  const nedozvoljenePoljaZaIzmenu = poljaZaIzmenu.filter(polje => !dozvoljenePoljaZaIzmenu.includes(polje));

  if(nedozvoljenePoljaZaIzmenu.length > 0) {
    return res.status(400).send({ err: `Polja ${nedozvoljenePoljaZaIzmenu} nisu dozvoljena za izmenu.` });
  }

  try{
    const tim = await Tim.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if(!tim) {
      return res.status(404).send();
    }
    res.send(tim);
  } catch(err){
    res.status(400).send(err);
  }
});

// Brisanje postojećeg tima
router.delete('/:id', async(req, res) => {
  const id = req.params.id;
  try{
    const tim = await Tim.findByIdAndDelete(id);
    if(!tim){
      return res.status(404).send();
    }
    res.send(tim);
  } catch(err){
    res.status(500).send(err);
  }
});