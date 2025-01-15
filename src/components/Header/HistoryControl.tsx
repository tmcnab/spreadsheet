import {
	CornerDownLeft,
	CornerUpRight,
	Download,
	Upload,
} from "react-feather"
import Flex from "../Flex"

export default function HistoryControl() {
	return (
		<Flex>
			<button>
				<CornerDownLeft />
			</button>
			<button>
				<Upload />
			</button>
			<select>
				<option value=''>Checkpoint</option>
			</select>
			<button>
				<Download />
			</button>
			<button>
				<CornerUpRight />
			</button>
		</Flex>
	)
}