const data = [{ 
	disabled: false,
	label: 'Table 1',
	selected: true,
	value: 'table-1',
}]

export default function TableSelect () {
	const children = data.map((item, key) => 
		<option 
			disabled={item.disabled}
			key={key}
			label={item.label}
			selected={item.selected}
			value={item.value}
		/>
	)

	return <select>{children}</select>
}