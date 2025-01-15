const data = [{ 
	disabled: false,
	label: 'Table 1',
	selected: true,
	value: 'table-1',
}]

export default function TableSelect () {
	const children = data.map(item => 
		<option 
			disabled={item.disabled}
			label={item.label}
			selected={item.selected}
			value={item.value}
		/>
	)

	const style = {
		minWidth: '20vw',
	}

	return <select style={style}>{children}</select>
}