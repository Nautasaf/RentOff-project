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
                            <div className="apartment_block" key={apartment.id} owner={apartment.user_id}>
                                <div><img className="apartImage" src={apartment.image} alt='apartment_image'></img></div>
                                <div>Комнат в квартире: {apartment.rooms}</div>
                                <div>Арендная плата: {apartment.rent}</div>
                                <div>Адрес: {apartment.address}</div>
                                <div>Описание: {apartment.description}</div>
                                <button className="like">{count[apartment.id]}♡</button>
                            </div>
                            )) : (null)}
                        </div>
                         
                        <h2>Понравившиеся объявления</h2>
                        <div className="apartmentsContainer">
                            {likedApartments ? likedApartments.map((apartment) => (
                            <div className="apartment_block" key={apartment.id} owner={apartment.user_id}>
                                <div><img className="apartImage" src={apartment.image} alt='apartment_image'></img></div>
                                <div>Комнат в квартире: {apartment.rooms}</div>
                                <div>Арендная плата: {apartment.rent}</div>
                                <div>Адрес: {apartment.address}</div>
                                <div>Описание: {apartment.description}</div>
                                <button className="like">{count[apartment.id]}♡</button>
                            </div>
                            )) : (null)}
                        </div>
                    </div>
                ) : (
                    <div>You are not loginned</div>  
                )}
            </Layout>
            <script defer src='/js/login.script.js'></script>
        </div>
    )
}