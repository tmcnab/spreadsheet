import { Bold, Italic, Underline } from 'react-feather'
import Flex from '../Flex'
import FontSizeInput from './FontSizeInput'

export default function FontControl () {
	return (
		<Flex>
			<button>
				<Bold />
			</button>
			<button>
				<Underline />
			</button>
			<button>
				<Italic />
			</button>
			<FontSizeInput />
			<select>
				<option>Cursive</option>
				<option>Fantasy</option>
				<option>Monospace</option>
				<option>San serif</option>
				<option>Serif</option>
			</select>
			<select>
				<option>Left</option>
				<option>Center</option>
				<option>Right</option>
				<option>Justify</option>
			</select>
		</Flex>
	)
}