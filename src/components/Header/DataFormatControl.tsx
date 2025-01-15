import { DollarSign, Percent, Type } from 'react-feather'
import Flex from '../Flex'

export default function DataFormatControl () {
	return (
		<Flex>
			<button>
				<DollarSign />
			</button>
			<button>
				<Percent />
			</button>
			<button>
				<Type />
			</button>
		</Flex>
	)
}