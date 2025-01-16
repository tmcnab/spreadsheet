export default function RangeCell () {
	const value = `A0:B1`
	return (
		<th>
			<input style={{ border: 0, maxWidth: '4rem', textAlign: 'center' }} value={value} />
		</th>
	)
}