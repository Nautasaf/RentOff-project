const React = require('react');
const Layout = require('./Layout');

module.exports = function Login({ title, user }) {
    return (
        <div>
            <Layout title = { title }  user={ user }>
                {user ? (
                    <div>Вы уже вошли в свой аккаунт</div>
                ) : (
                    <div className='loginMain'>
                        <div className='loginDiv'>
                            <div>Вход</div>
                            <form method='POST' className='loginForm'>
                                <div><label>Эл.почта: <input name="userEmail" type="text" /></label></div>
                                <div><label>Пароль: <input name="password" type="password" /></label></div>
                                <div><button type='submit' id='logBtn'>Войти</button></div>
                            </form>
                            <div className="messageDiv"></div> 
                        </div>
                        <div className='newUserDiv'><a href='/registration'><button  className='iamnew'>Регистрация</button></a></div>
                    </div>
                )}
            </Layout>
            <script defer src='/js/login.script.js'></script>
        </div>
    )
}