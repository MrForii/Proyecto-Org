import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://github.com/MrForii' target="blank">
                <img src="/img/github.png" alt='Facebook' />
            </a>
            <a href='https://twitter.com/Forii_ok' target="blank">
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.instagram.com/forii_ok/' target="blank">
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Alura</strong>
    </footer>
}

export default Footer