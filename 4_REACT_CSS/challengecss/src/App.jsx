import "./App.css";
import CarDetais from "./components/CarDetais";

function App() {
  const cars = [
    { id: 1, marca: "BMW", kmRodados: 0, cor: "Azul", novo: true },
    { id: 2, marca: "Ferrari", kmRodados: 12054, cor: "Amarelo", novo: false },
    { id: 3, marca: "Porshe", kmRodados: 65231, cor: "Vermelho", novo: false },
  ];

  return (
    <div className="container">
      <div>
        <h1>Carros disponíveis: </h1>
      </div>
      <div className="cars">
        {cars.map((car) => (
          <CarDetais
            key={car.id}
            id={car.id}
            marca={car.marca}
            kmRodados={car.kmRodados}
            cor={car.cor}
            novo={car.novo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
