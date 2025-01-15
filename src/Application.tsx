import Header from "./components/Header/Header"
import Table from "./components/Table/Table"

export default function Application () {
	return (
		<>
			<Header />
			<main>
				<Table />
			</main>
			<footer>
				Tables
			</footer>
		</>
	)
}