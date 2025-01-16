import { ArrayStack } from "./types/ArrayStack"
import { Spreadsheet, SpreadsheetState } from "./types/Spreadsheet"
import { useState } from "react"
import Header from "./components/Header/Header"
import Table from "./components/Table/Table"

export default function Application () {
	const state: SpreadsheetState = useState<Spreadsheet>({
		changes: new ArrayStack(),
		name: 'My Spreadsheet',
		state: [{
			id: crypto.randomUUID(),
			name: 'Table 1',
			columns: []
		}]
	})
	return (
		<>
			<Header state={state} />
			<Table state={state} />
		</>
	)
}