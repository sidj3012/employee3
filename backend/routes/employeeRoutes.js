const express = require('express');
const Employee = require('../models/Employee.js');

const router = express.Router();
const GEOCODE_API_KEY = '68b138dacad448778da19134d59946b4';

router.post('/', async (req, res) => {
  const { name, email, position, address, salary, mobile, doj, dob } = req.body;

  try {
    // Dynamically import `node-fetch`
    const fetch = (await import('node-fetch')).default;

    const geocodeResponse = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${GEOCODE_API_KEY}`
    );
    const geocodeData = await geocodeResponse.json();

    if (geocodeData.results.length === 0) {
      return res.status(400).json({ error: 'City not found' });
    }

    const { lat, lng } = geocodeData.results[0].geometry;

    const newEmployee = new Employee({
      name,
      email,
      position,
      address,
      salary,
      mobile,
      doj,
      dob,
      location: { lat, lon: lng },
    });

    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log(err);
  }
});

// Get all Employees
router.get('/', async (req, res) => {
    try {
      const employees = await Employee.find();
      res.status(200).json(employees);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch employees' });
    }
  });
  

module.exports = router;
