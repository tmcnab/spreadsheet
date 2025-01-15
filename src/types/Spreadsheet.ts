import { Change } from './Change'
import { Stack } from './Stack'
import { Table } from './Table'

export type Spreadsheet = {
	changes: Stack<Change>
	name: string
	readonly state: Table[]
}


