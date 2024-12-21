const React = require('react');
const Layout = require('./Layout');

module.exports = function Profile({ title, user, myApartments, likedApartments, count}) {
    return (
        <div>
            <Layout title = { title }  user={ user }>
                {user ? (
                    <div>
                        <h2>{user.email}</h2>
                        <h2>Мои объявления</h2>
                        <div className="apartmentsContainer">
                            {myApartments ? myApartments.map((apartment) => (
                            <div className="apartment_block" key={apartment.id} owner={apartment.user_id} apartId={apartment.id}>
                                <div className="imageDiv"><img className="apartImage" src={apartment.image} alt='apartment_image'></img></div>
                                <div className='infoDiv'>
                                    <div>{apartment.rooms}-комн. квартира, {apartment.area} м², {apartment.floor}/{apartment.maxFloor} этаж</div>
                                    <div>Арендная плата: {apartment.rent}</div>
                                    <div>Адрес: {apartment.address}</div>
                                    <div>Описание: {apartment.description}</div>
                                    <button className="like" type='button'>{count[apartment.id]}♡</button>
                                </div>
                                {user && apartment.user_id === user.id ? (
                                    <div className="ownerFunctions">
                                        <button className="ownerButtonsDel" method="DELETE">Удалить</button>
                                        <button className="ownerButtonsPut" method="PUT">Изменить</button>
                                    </div>
                                ) : (
                                    null
                                )}
                            </div>
                            )) : (null)}
                        </div>
                         
                        <h2>Понравившиеся объявления</h2>
                        <div className="apartmentsContainer">
                            {likedApartments ? likedApartments.map((apartment) => (
                                <div className="apartment_block" key={apartment.id} owner={apartment.user_id} apartId={apartment.id}>
                                    <div className="imageDiv"><img className="apartImage" src={apartment.image} alt='apartment_image'></img></div>
                                    <div className='infoDiv'>
                                        <div>{apartment.rooms}-комн. квартира, {apartment.area} м², {apartment.floor}/{apartment.maxFloor} этаж</div>
                                        <div>Арендная плата: {apartment.rent}</div>
                                        <div>Адрес: {apartment.address}</div>
                                        <div>Описание: {apartment.description}</div>
                                        <button className="like">{count[apartment.id]}♡</button>
                                    </div>
                                    {user && apartment.user_id === user.id ? (
                                        <div className="ownerFunctions">
                                            <button className="ownerButtonsDel" method="DELETE">Удалить</button>
                                            <button className="ownerButtonsPut" method="PUT">Изменить</button>
                                        </div>
                                    ) : (
                                        null
                                    )}
                                </div>
                            )) : (null)}
                        </div>
                    </div>
                ) : (
                    <div>Войдите в аккаунт нажав кнопку входа</div>  
                )}
            </Layout>
            <script defer src='/js/login.script.js'></script>
            <script defer src='/js/ownerFunctions copy.js'></script>
        </div>
    )
}