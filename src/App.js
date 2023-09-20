import './App.css';
import Logo from './componentes/Logo/Logo';
import ListaDeTareas from './componentes/ListaDeTareas/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <Logo/>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>    
  );
}

export default App;
