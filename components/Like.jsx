const React = require('react');


async function LikeEl({ apartId, userId }) {
    try {
        const { Like } = require('../db/models');
        const likes = await Like.findAll();
        // console.log(likes);
            
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
    
        const apartLikes = await Like.findAll({where: {user_id: userId, apartment_id: apartId}});
        console.log(count[apartId], apartLikes);
        // (
            // <button className="like" type='button'>{count[apartId]}{apartLikes ? (
            //     <b>♥</b>
            // ) : (
            //     <b>♡</b>
            // )}</button>
        // )
    } catch (error) {
        console.log('Ошибка с лайками: ', error);
    }
}

LikeEl({apartId: 2, userId: 1})