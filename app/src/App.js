import './App.css';
import PlanillaPersona from './componentes/PlanillaPersona/PlanillaPersona';

function App() {
  return (
    <div>
      <PlanillaPersona apellido="Doe" nombre="Jane" año= {45} color="Black" />
      <PlanillaPersona apellido="Smith" nombre="John" año={ 88} color="Brown" />
      <PlanillaPersona apellido="Filmore" nombre="Millard" año={ 50} color="Brown" />
      <PlanillaPersona apellido="Smith" nombre="Maria" año={ 62} color="Brown" />
    </div>
  );
}

export default App;
