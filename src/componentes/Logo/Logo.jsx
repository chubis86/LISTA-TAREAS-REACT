import logo from '../../imagenes/logo.png';
import './Logo.css';

export default function Logo(){
    return (
        
        <div className="logo-contenedor">
            <img 
            alt=''
            src={logo} 
            className='logo'
            />
        </div>  
       
    );
}