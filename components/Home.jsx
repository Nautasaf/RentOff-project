const React = require("react");
const Layout = require("./Layout");

module.exports = function Home({ title, user, apartments, count }) {
  return (
    <div>
      <Layout title={title} user={ user }>
          <div>
            {user ? (
              <div className="newApart">
                <div>Создать объявление</div>
                  <div className="addApart">
                    <form method="POST" className="apartForm">
                        <div><label>Комнат в квартире: <input name="newApartRooms" type="text" /></label></div>
                        <div><label>Арендная плата: <input name="newApartRent" type="text" /></label></div>
                        <div><label>Адрес: <input name="newApartAddress" type="text" /></label></div>
                        <div><label>Описание: <input name="newApartDescription" type="text" /></label></div>
                        <div><button>Добавить картинку</button></div>
                        <div><button id="apartBtn" type="submit">Опубликовать объявление</button></div>
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
      </Layout>
      <script defer src='/js/newApart.script.js'></script>
    </div>
    
  );
};
