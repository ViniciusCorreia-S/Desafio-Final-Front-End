const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname)));

app.get("/listCars", (req, res) => {
    try {
        const listCars = [
            {
                id: 4,
                img: "http://localhost:3001/img/",
                vehicle: "",
                ano: 222,
            },
            {
                id: 4,
                img: "http://localhost:3001/img/",
                vehicle: "",
                ano: 222,
            },
            {
                id: 4,
                img: "http://localhost:3001/img/",
                vehicle: "",
                ano: 222,
            },
            {
                id: 4,
                img: "http://localhost:3001/img/",
                vehicle: "",
                ano: 222,
            }
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
                marca: 23,
                vehicle: "",
                ano: 23,
                motorização: 22,
                transmissao: 22,
                consumomedio: 22,
                preço: 22,
                img: "http://localhost:3001/img/"
            },
            {
                id: 2,
                marca: 23,
                vehicle: "",
                ano: 23,
                motorização: 22,
                transmissao: 22,
                consumomedio: 22,
                preço: 22,
                img: "http://localhost:3001/img/"
            },
            {
                id: 3,
                marca: 23,
                vehicle: "",
                ano: 23,
                motorização: 22,
                transmissao: 22,
                consumomedio: 22,
                preço: 22,
                img: "http://localhost:3001/img/"
            },
            {
                id: 4,
                marca: 23,
                vehicle: "",
                ano: 23,
                motorização: 22,
                transmissao: 22,
                consumomedio: 22,
                preço: 22,
                img: "http://localhost:3001/img/"
            }
        ];

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