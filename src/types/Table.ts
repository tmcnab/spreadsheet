import { Column } from './Column'

export type Table = {
	columns: Column[]
	name: string
	id: string
}