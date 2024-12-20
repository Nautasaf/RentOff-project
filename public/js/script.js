const Like = require("../../db/models");

async function userLikedApart(userId, apartId) {
  try {
    const apartLikes = await Like.findAll({where: {user_id: userId, apartment_id: apartId}});
    return apartLikes
  } catch (error) {
    console.log('Likes error', error);
  }
}

module.exports = userLikedApart