import PropTypes from 'prop-types'

import styles from "./CarDetais.module.css"

const CarDetais = ({ id, marca, kmRodados, cor, novo }) => {
  return (
    <div className={styles.container}>
      <h2>Carro {id}</h2>
      <ul>
        <li>Marca: {marca}</li>
        <li>KM: {kmRodados}</li>
        <li>Cor: {cor}</li>
        <li>Novo ? {novo ? <span>Sim</span> : <span>Não</span>}</li>
      </ul>
    </div>
  );
};

CarDetais.propTypes = {
  id: PropTypes.number.isRequired,
  marca: PropTypes.string.isRequired,
  kmRodados: PropTypes.number.isRequired,
  cor: PropTypes.string.isRequired,
  novo: PropTypes.bool.isRequired,
};

export default CarDetais;
