const express = require('express');
const Profile = require("../components/Profile");
const { Apartment, Like } = require('../db/models')

const router = express.Router();

router.get('/', async (req, res) => {
    const user = req.session.user_sid;
    try {
        const myApartments = await Apartment.findAll({ where: { user_id: user.id } });
        const likes = await Like.findAll();
    
        // Понравившиеся объявления
        const likedApartments = [];
        const myLikes = await Like.findAll({ where: { user_id: user.id } });
        for (const myLike of myLikes) {
            const apartLike = await Apartment.findOne({ where: { id: myLike.apartment_id } });
            likedApartments.push(apartLike);
        }

        // Лайки у объявлений
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
          myApartments,
          likedApartments,
          count,
          title: "Профиль"
        }
        
        res.renderComponent(Profile, templateData);
    } catch (error) {
        console.log('Ошибка подключения с таблицей объявлений');
    }
})

router.delete('/', async (req, res) => {
  const {delApId } = req.body;
  try {
    const delApartBD = await Apartment.findOne({where: {id: delApId}});
    await delApartBD.destroy()
    res.status(200).json({ message: 'Объявление удалено' })
  } catch (error) {
    console.log('Ошибка при удалении объявления', error);
  }
})

module.exports = router;