import { KeyboardEventHandler } from "react"

export interface CellProps {
	name: string
}

export default function Cell (props: CellProps) {
	const onKeyUp: KeyboardEventHandler<HTMLInputElement> = (event) => {
		console.log(event)
	}

	return (
		<td>
			<input name={props.name} onKeyUp={onKeyUp} />
		</td>
	)
}