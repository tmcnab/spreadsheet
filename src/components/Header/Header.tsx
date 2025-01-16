import './Header.css'
import { SpreadsheetState } from '../../types/Spreadsheet'
import CellSelectControl from './CellSelectControl'
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
			<section>
				<HistoryControl />
				<DataFormatSelect />
				<FontControl />
			</section>
			<section>
				<TableSelect />
				<CellSelectControl />
				<CellValueControl />
			</section>
		</header>
	)
}