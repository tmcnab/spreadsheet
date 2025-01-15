import { times } from 'lodash'
import Cell from './Cell'

export interface RowProps {
	index: number
}

export default function Row ({index}: RowProps) {
	return (
		<tr>
			<th>{index}</th>
		{times(26, (n) => 
			<Cell name={`${index}-${n}`} />
		)}
		</tr>
	)
}