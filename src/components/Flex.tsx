import { CSSProperties, ReactNode } from 'react'

export interface FlexProps {
	children: ReactNode	
}

export default function Flex (props: FlexProps) {
	const style: CSSProperties = {
		alignItems: 'center',
		display: 'flex',
	}
	return <div style={style}>{props.children}</div>
}