import { useCallback, useMemo, useRef } from 'react';
import useCotizador from '../hooks/useCotizador';
import { MARCAS, PLANES } from '../constants';

const Resultado = () => {
  const { resultado, datos } = useCotizador();
  const { marca, plan, year } = datos;
  // Como el calculo del año no requiere de una funcion entonces se usar useRef para evitar el renderin automatico cada vez que cambia el respectivo select
  const yearRef = useRef(year);

  // Utilizo useCallback para que no se me renderice la info cada vez que modifico marca por medio del select, si no hasta que cambie resultado con el boton enviar
  const [nombreMarca] = useCallback(
    MARCAS.filter(m => m.id === Number(marca)),
    [resultado]
  );
  // Alternativa usando useMemo en vez de useCallback
  const [nombrePlan] = useMemo(() =>
    PLANES.filter(m => m.id === Number(plan)),
    [resultado]
  );

  if (resultado === 0) return null;

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">
        Resumen
      </h2>

      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {nombreMarca.nombre}
      </p>

      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {nombrePlan.nombre}
      </p>

      <p className="my-2">
        <span className="font-bold">Año del Auto: </span>
        {yearRef.current}
      </p>

      <p className="my-2 text-2xl">
        <span className="font-bold">Total Cotización: </span>
        {resultado}
      </p>
    </div>
  );
};

export default Resultado;
