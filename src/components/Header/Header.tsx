import './Header.css'
import CellSelectControl from './CellSelectControl'
import CellValueControl from './CellValueControl'
import DataFormatControl from './DataFormatControl'
import FontControl from './FontControl'

import HistoryControl from './HistoryControl'

export default function Header () {
	return (
		<header>
			<CellSelectControl />
			<CellValueControl />
			<HistoryControl />
			<DataFormatControl />
			<FontControl />
		</header>
	)
}