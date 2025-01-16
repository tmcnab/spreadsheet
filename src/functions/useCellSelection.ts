import { useState } from "react"
import { SelectionState } from "../types/SelectionState"

export const useCellSelection = (cells: string, table: string) => {
	const [state, setState] = useState<SelectionState>({ cells, table })

	const [sc_column, sc_row] = Array.from(state.cells)
	
	return {
		isSelected: (column: string, row: number) => {
			return column == sc_column && row == Number(sc_row)
		},
		selectCells: (cells: string) => {
			setState({ ...state, cells })
		},
	}
}