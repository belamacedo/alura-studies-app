import React from 'react';
import style from './Relogio.module.scss';

interface Props {
  tempo: number | undefined;
}

export default function Relogio({ tempo = 0 }: Props) {
  // se o tempo não exister/for undefined, será setado o tempo 0.

  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;
  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0'); //1º parametro é a quantidade de caracter e 2º parametro é o valor default dele
  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');
  return (
    <>
      <span className={style.relogioNumero}>{minutoDezena}</span>
      <span className={style.relogioNumero}>{minutoUnidade}</span>
      <span className={style.relogioNDivisao}>:</span>
      <span className={style.relogioNumero}>{segundoDezena}</span>
      <span className={style.relogioNumero}>{segundoUnidade}</span>
    </>
  );
}
