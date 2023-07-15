import logo from '../logo.svg';

export default function Footer(props){
    return(
        <footer id="footer" className={`bg-${props.theme} text-secondary text-center p-4 position-relative w-100 bottom-0`}>
            Coded with 💙 by <a href="https://ahmedhamza.pk/" className={`text-decoration-none text-${props.theme==='light'?'dark':'light'}`}>@AhmedHamzaArif</a> on<img src={logo} className="logo" style={{height: "30px"}}/>
        </footer>
    )
}