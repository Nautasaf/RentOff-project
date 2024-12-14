const React = require('react');
const Layout = require('./Layout');

module.exports = function Login({ title, user }) {
    return (
        <div>
            <Layout title = { title }  user={ user }>
                {user ? (
                    <div>You are already loginned</div>
                ) : (
                    <div className='loginMain'>
                        <div className='loginDiv'>
                            <div>Log in account</div>
                            <form method='POST' className='loginForm'>
                                <div><label>Email: <input name="userEmail" type="text" /></label></div>
                                <div><label>Password: <input name="password" type="password" /></label></div>
                                <div><button type='submit' id='logBtn'>Log in</button></div>
                            </form>
                            <div className="messageDiv"></div> 
                        </div>
                        <div className='newUserDiv'><a href='/registration'><button  className='iamnew'>I am new user</button></a></div>
                    </div>
                )}
            </Layout>
            <script defer src='/js/login.script.js'></script>
        </div>
    )
}