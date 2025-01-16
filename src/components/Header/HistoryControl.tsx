import { CornerDownLeft, CornerUpRight } from "react-feather"
import Flex from "../Flex"

export default function HistoryControl() {
	return (
		<Flex>
			<button>
				<CornerDownLeft />
			</button>
			<button>
				<CornerUpRight />
			</button>
		</Flex>
	)
}