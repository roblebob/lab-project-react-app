import colorTheme from "../colorTheme.jsx";


const Footer = () => {
    return (
        <footer style={{
            background: colorTheme.primary,
            height: "50px",
            display: "flex",
            justifyContent: "center",
            }}>
            <p>© 2024 <a href="https://github.com/roblebob/lab-project-react-app.git">@Github</a></p>
        </footer>
    );
    
}

export default Footer;