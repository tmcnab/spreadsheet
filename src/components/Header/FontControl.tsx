import { Bold, Italic, Underline } from 'react-feather'
import Flex from '../Flex'

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
			<select>
				<option>8</option>
				<option>10</option>
				<option>12</option>
				<option>14</option>
				<option>24</option>
				<option>36</option>
			</select>
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