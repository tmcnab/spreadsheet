export interface CellProps {
	name: string
}

export default function Cell (props: CellProps) {
	return (
		<td>
			<input name={props.name} />
		</td>
	)
}