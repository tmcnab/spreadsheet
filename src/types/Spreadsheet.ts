import { Change } from './Change'
import { Stack } from './Stack'
import { Table } from './Table'
import { Dispatch, SetStateAction } from 'react'

export type Spreadsheet = {
	changes: Stack<Change>
	name: string
	readonly state: Table[]
}

export type SpreadsheetState = [Spreadsheet, Dispatch<SetStateAction<Spreadsheet>>]