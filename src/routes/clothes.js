'use strict';

const express = require('express');
const router = express.Router();
const clothModel = require('../models/clothes');
const DataCollection = require('../models/data-collection-class');
const cloth = new DataCollection(clothModel);
const validator = require('../middleware/validator');

router.get('/', getClothes);
router.get('/:id', getClothes);
router.post('/', validator, createClothes);
router.put('/:id', validator, updateClothes);
router.delete('/:id', deleteClothes);

async function getClothes(req, res, next) {
  try {
    const id = req.params.id;
    const clothes = await cloth.read(id);
    res.json({ clothes });
  } catch (e) {
    next(e);
  }
}

async function createClothes(req, res, next) {
  try {
    const data = req.body;
    const newCloth = await cloth.create(data);
    res.json(newCloth);
  } catch (e) {
    next(e);
  }
}
async function updateClothes(req, res, next) {
  try {
    const id = req.params.id;
    const data = req.body;
    const newCloth = await cloth.update(id, data);
    res.json(newCloth);
  } catch (e) {
    next(e);
  }
}
async function deleteClothes(req, res, next) {
  try {
    const id = req.params.id;
    const deletedCloth = await cloth.delete(id);
    res.json(deletedCloth);
  } catch (e) {
    next(e);
  }
}
module.exports = router;