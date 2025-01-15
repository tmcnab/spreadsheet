import './FontSizeInput.css'

export default function FontSizeInput() {
	return (
		<div className='font-size-input'>
			<input list='font-sizes' value={12} />
			<datalist id='font-sizes'>
				<option value={6}>6</option>
				<option value={8}>8</option>
				<option value={10}>10</option>
				<option value={12}>12</option>
				<option value={18}>18</option>
				<option value={24}>24</option>
				<option value={36}>36</option>
			</datalist>
		</div>
	)
}