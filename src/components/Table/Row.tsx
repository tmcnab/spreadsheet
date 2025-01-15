import { times } from 'lodash'

export interface RowProps {
	index: number
}

export default function Row ({index}: RowProps) {
	return (
		<tr>
			<th>{index}</th>
		{times(26, (n) => 
			<td contentEditable key={`td-${index}-${n}`} />
		)}
		</tr>
	)
}