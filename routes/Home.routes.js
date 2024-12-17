const express = require('express');
const Home = require('../components/Home');
const { Apartment } = require('../db/models');
const { Like } = require('../db/models');


const router = express.Router();

router.get('/', async (req, res) => {
  const user = req.session.user_sid;
  try {
    const apartments = await Apartment.findAll();
    const likes = await Like.findAll();

    const onlyTypes = [];
    for (const oneLike of likes) {
      onlyTypes.push(oneLike.apartment_id)
    };
    let count = {};

    for (const elem of onlyTypes) {
      if (count[elem] === undefined) {
        count[elem] = 1;
      } else {
        count[elem]++;
      }
    }

    const templateData = {
      user,
      apartments,
      count,
      title: "Главная"
    }
    
    res.renderComponent(Home, templateData);
  } catch (error) {
    console.log('Ошибка подключения с таблицей объявлений');
  }
});

router.post('/', async (req, res) => {
  const user = req.session.user_sid;
  const { newApartRooms, newApartRent, newApartAddress, newApartDescription } = req.body;
  try {
    const newAdv = await Apartment.create({
      user_id: user,
      rooms: newApartRooms,
      rent: newApartRent,
      address: newApartAddress,
      descriprion: newApartDescription
    })
    res.status(201).json({message: 'Создано новое объявление'})
  } catch (error) {
    console.log('Ошибка при создании объявления', error);
  }
})

module.exports = router;