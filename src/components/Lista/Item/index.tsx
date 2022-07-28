import { ITarefa } from '../../../types/tarefa';
import style from './Item.module.scss';
export default function Item({
	tarefa,
	tempo,
	selecionado,
	completado,
	id,
}: ITarefa) {
	return (
		<li className={style.item}>
			<h3>{tarefa}</h3>
			<span>{tempo}</span>
		</li>
	);
}
