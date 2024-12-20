const React = require('react');

module.exports = function Layout({ children, title, user }) {
    return (
        <html lang="en">
        <head>
            <title>{title}</title>
            <link rel="stylesheet" href="/css/style.css" />
            <script defer src='/js/script.js'></script>
        </head>
        <body>
            <header>
                <h1><img src='/images/icon.png' alt='Logo' className='logo'></img>RentOff</h1>
                {user ? 
                    (<nav>
                        <ul>
                            <li><a href="/">Главная</a></li>
                            <li><a href="/profile">Профиль</a></li>
                            <li><a href='/login/logout'>Выйти</a></li>
                        </ul>
                    </nav>) : (
                    <nav>
                        <ul>
                            <li><a href="/">Главная</a></li>
                            <li><a href="/login">Вход</a></li>
                            <li><a href='/registration'>Регистрация</a></li>
                        </ul>
                    </nav>)
                }
            </header>
            <main>
                {children}
            </main>
        </body>
        </html>
    );
};