const createError = require('http-errors');
const mongoose = require('mongoose');

const Clients = require('../Models/clients');

module.exports = {
  getAllClients: async (req, res, next) => {
    try {
      const results = await Clients.find({}, { __v: 0 });
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewClients: async (req, res, next) => {
    try {
      const Clients = new Clients(req.body);
      const result = await Clients.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error.name === 'ValidationError') {
        next(createError(422, error.message));
        return;
      }
      next(error);
    }
  },

  findClientsById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const Clients = await Clients.findById(id);
      // const Clients = await Clients.findOne({ _id: id });
      if (!Clients) {
        throw createError(404, 'Clients does not exist.');
      }
      res.send(Clients);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Clients id'));
        return;
      }
      next(error);
    }
  },

  updateClients: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Clients.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Clients does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Clients Id'));
      }

      next(error);
    }
  },

  deleteClients: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Clients.findByIdAndDelete(id);
      // console.log(result);
      if (!result) {
        throw createError(404, 'Clients does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Clients id'));
        return;
      }
      next(error);
    }
  }
};