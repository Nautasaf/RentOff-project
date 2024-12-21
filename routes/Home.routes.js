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
      likes,
      title: "Главная"
    }
    
    res.renderComponent(Home, templateData);
  } catch (error) {
    console.log('Ошибка подключения с таблицей объявлений');
  }
});

router.post('/', async (req, res) => {
  const randomImage = 3 + Math.round(Math.random() * 10)
  const user = req.session.user_sid;
  const { newApartRooms, newApartArea, newApartRent, newApartFloor, newApartMaxFloor, newApartAddress, newApartDescription } = req.body;
  try {
    const newAdv = await Apartment.create({
      user_id: user.id,
      rooms: Number(newApartRooms),
      area: Number(newApartArea),
      rent: Number(newApartRent),
      floor: Number(newApartFloor),
      maxFloor: Number(newApartMaxFloor),
      address: newApartAddress,
      description: newApartDescription,
      image: `images/${randomImage}.jpg`
    })
    res.status(201).json({message: 'Создано новое объявление'})
  } catch (error) {
    console.log('Ошибка при создании объявления', error);
  }
})

router.delete('/', async (req, res) => {
  const {delApId} = req.body;
  try {
    const delApartBD = await Apartment.findOne({where: {id: delApId}});
    await delApartBD.destroy()
    res.status(200).json({ message: 'Объявление удалено' })
  } catch (error) {
    console.log('Ошибка при удалении объявления', error);
  }
})

module.exports = router;