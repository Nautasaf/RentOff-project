const React = require("react");
const Layout = require("./Layout");

const userLikedApart = require('../public/js/script')

module.exports = function Home({ title, user, apartments, count, likes }) {
  return (
    <div>
      <Layout title={title} user={ user }>
          <div>
            {user ? (
              <div className="newApart">
                <div>Создать объявление</div>
                  <div className="addApart">
                    <form method="POST" className="apartForm">
                      <div className="postInputDiv"><label>Комнат в квартире: <input className="postInput" name="newApartRooms" type="text" /></label></div>
                      <div className="postInputDiv"><label>Площадь: <input className="postInput" name="newApartArea" type="text" /></label></div>
                      <div className="postInputDiv"><label>Арендная плата: <input className="postInput" name="newApartRent" type="text" /></label></div>
                      <div className="postInputDiv"><label>Этаж: <input className="postInput" name="newApartFloor" type="text" /></label></div>
                      <div className="postInputDiv"><label>Этажей в доме: <input className="postInput" name="newApartMaxFloor" type="text" /></label></div>
                      <div className="postInputDiv"><label>Адрес: <input className="postInput" name="newApartAddress" type="text" /></label></div>
                      <div className="postInputDiv"><label>Описание: <input className="postInput" name="newApartDescription" type="text" /></label></div>
                      <div className="postButtonDiv"><button className="addingButton">Добавить картинку</button></div>
                      <div className="postButtonDiv"><button className="addingButton" id="apartBtn" type="submit">Опубликовать объявление</button></div>
                    </form>
                    <div className="messageDiv"></div>
                  </div>
              </div>
            ) : (
              <div>Чтобы разместить объявление, авторизуйтесь</div>
            )}
            <h2>Объявления</h2>
            <div className="apartmentsContainer">
              {apartments ? apartments.map((apartment) => (
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
      </Layout>
      <script defer src='/js/newApart.script.js'></script>
      <script defer type="module" src="/js/ownerFunctions.js"></script>
    </div>
  );
};
