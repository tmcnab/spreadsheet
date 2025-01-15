import { times } from 'lodash'
import Row from './Row'
import './Table.css'

export default function Table() {
	return (
		<main>
			<table className='Table'>
				<thead>
					<tr>
						<th />
						{times(26, (n) => {
							const children = String.fromCharCode('A'.charCodeAt(0) + n)
							return <th key={`th-{n}`}>{children}</th>
						})}
					</tr>
				</thead>
				<tbody>
				{times(100, (m) =>
					<Row index={m} />
				)}
				</tbody>
			</table>
		</main>
	)
}