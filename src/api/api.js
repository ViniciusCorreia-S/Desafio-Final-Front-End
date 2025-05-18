const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname)));

app.get("/listCars", (req, res) => {
    try {
        const listCars = [
            {
                id: 1,
                brand: 'BMW',
                model: '320i',
                year: 2024,
                price: 48900,
                engine: '2.0L Turbo',
                power: 184,
                transmission: 'Automática de 8 velocidades',
                bodyType: 'Sedan',
                width: 1827,
                height: 1442,
                trunk: 480,
                imageUrl: 'assets/images/bmw-320i.jpg'
            },
            {
                id: 1,
                brand: 'BMW',
                model: '320i',
                year: 2024,
                price: 48900,
                engine: '2.0L Turbo',
                power: 184,
                transmission: 'Automática de 8 velocidades',
                bodyType: 'Sedan',
                width: 1827,
                height: 1442,
                trunk: 480,
                imageUrl: 'assets/images/bmw-320i.jpg'
            },
            {
                id: 1,
                brand: 'BMW',
                model: '320i',
                year: 2024,
                price: 48900,
                engine: '2.0L Turbo',
                power: 184,
                transmission: 'Automática de 8 velocidades',
                bodyType: 'Sedan',
                width: 1827,
                height: 1442,
                trunk: 480,
                imageUrl: 'assets/images/bmw-320i.jpg'
            },
        ];

        return res.status(200).json({ listCars });

    } catch (error) {
        return res.status(500).json({
            message: "Falha na comunicação com o servidor!"
        });
    }
});

app.get("/dataCars", (req, res) => {
    try {
        const dataCars = [
            {
      id: 1,
      brand: 'BMW',
      model: '320i',
      year: 2024,
      price: 48900,
      engine: '2.0L Turbo',
      power: 184,
      torque: 290,
      acceleration: 7.1,
      fuelConsumption: 6.3,
      transmission: 'Automática de 8 velocidades',
      drive: 'Traseira',
      bodyType: 'Sedan',
      seats: 5,
      length: 4709,
      width: 1827,
      height: 1442,
      wheelbase: 2851,
      trunk: 480,
      imageUrl: 'assets/images/bmw-320i.jpg'
    },
    {
      id: 2,
      brand: 'BMW',
      model: 'X3',
      year: 2024,
      price: 57900,
      engine: '2.0L Turbo',
      power: 252,
      torque: 350,
      acceleration: 6.3,
      fuelConsumption: 7.9,
      transmission: 'Automática de 8 velocidades',
      drive: 'xDrive (integral)',
      bodyType: 'SUV',
      seats: 5,
      length: 4708,
      width: 1891,
      height: 1676,
      wheelbase: 2864,
      trunk: 550,
      imageUrl: 'assets/images/bmw-x3.jpg'
    },
    {
      id: 3,
      brand: 'Ford',
      model: 'Focus',
      year: 2024,
      price: 31900,
      engine: '1.5L EcoBoost',
      power: 150,
      torque: 240,
      acceleration: 8.9,
      fuelConsumption: 5.8,
      transmission: 'Automática de 8 velocidades',
      drive: 'Dianteira',
      bodyType: 'Hatchback',
      seats: 5,
      length: 4378,
      width: 1825,
      height: 1471,
      wheelbase: 2700,
      trunk: 375,
      imageUrl: 'assets/images/ford-focus.jpg'
    }];

        return res.status(200).json({ dataCars });

    } catch (error) {
        return res.status(500).json({
            message: "Falha na comunicação com o servidor!"
        });
    }
});

app.listen(3001, () => {
    console.log("API running on http://localhost:3001/");
});