import { SpreadsheetState } from '../../types/Spreadsheet'
import CellValueControl from './CellValueControl'
import DataFormatSelect from './DataFormatSelect'
import FontControl from './FontControl'
import HistoryControl from './HistoryControl'
import TableSelect from './TableSelect'

export interface HeaderProps {
	state: SpreadsheetState
}

export default function Header ({ state }: HeaderProps) {
	return (
		<header>
			<TableSelect />
			<HistoryControl />
			<DataFormatSelect />
			<FontControl />
			<CellValueControl />
		</header>
	)
}