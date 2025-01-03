import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Physics } from '@react-three/cannon';

function App() {
	return (
		<Canvas dpr={[1, 2]}>
			<Physics broadphase='SAP' gravity={[0, -2.6, 0]}>
				<Experience />
			</Physics>
		</Canvas>
	);
}

export default App;
