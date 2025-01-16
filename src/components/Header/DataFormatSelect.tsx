import { DataFormat } from '../../types/DataFormat'

export default function DataFormatSelect () {
	return (
		<select>
			<option>Format</option>
			<option value={DataFormat.DEFAULT}>Default</option>
			<option value={DataFormat.TEXT}>Text</option>
			<optgroup label='Numbers'>
				<option value={DataFormat.NUMBER}>Number 1234.56</option>
				<option value={DataFormat.CURRENCY}>Currency $1,234.56</option>
				<option value={DataFormat.SCIENTIFIC}>Scientific 1.2E+3</option>
			</optgroup>
			<optgroup label='Time'>
				<option value={DataFormat.DATETIME}>DateTime</option>
				<option value={DataFormat.DATE}>Date</option>
				<option value={DataFormat.TIME}>Time</option>
			</optgroup>
		</select>
	)
}