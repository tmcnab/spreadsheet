import { CSSProperties, ReactNode } from 'react'

export interface FlexProps {
	children: ReactNode
	style?: CSSProperties
}

export default function Flex (props: FlexProps) {
	const style: CSSProperties = {
		...props.style,
		alignItems: 'center',
		display: 'flex',
	}
	return <div style={style}>{props.children}</div>
}