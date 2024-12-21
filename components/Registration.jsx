const React = require("react");
const Layout = require("./Layout");

module.exports = function Register({ title, user }) {
  return (
    <div>
      <Layout title={title} user={ user }>
        {user ? (
          <div>Вы уже вошли в свой аккаунт</div>
        ) : (
          <div>
            Регистрация
            <div className="registrationDiv">
                <form method="POST" className="registrationForm">
                    <div><label>Эл.почта: <input name="newUserEmail" type="text" /></label></div>
                    <div><label>Пароль: <input name="newUserPassword1" type="password" /></label></div>
                    <div><label>Повторите пароль: <input name="newUserPassword2" type="password" /></label></div>
                    <div><button id="regBtn" type="submit">Зарегистрироваться</button></div>
                </form>
                <div className="messageDiv"></div>
            </div>
          </div>
        )}
      </Layout>
      <script defer src="/js/registration.script.js"></script>
    </div>
  );
};