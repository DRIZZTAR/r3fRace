import {
	OrbitControls,
	Environment,
	PerspectiveCamera,
	useTexture,
	Float,
} from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import { Track } from './Track';
import { Ground } from './Ground';
import { Car } from './Car';
import { ColliderBox } from './ColliderBox';
import { Perf } from 'r3f-perf';

export const Experience = () => {
	const eightBit = useTexture('/textures/metal8bit.jpg');

	const [thirdPerson, setThirdperson] = useState(true);
	const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21]);

	useEffect(() => {
		function keydownHandler(e) {
			if (e.key === 'k' || e.key === 'K') {
				if (thirdPerson)
					setCameraPosition([-6, 3.9, 6.21 + Math.random() * 0.01]);
				setThirdperson(!thirdPerson);
			}
		}

		window.addEventListener('keydown', keydownHandler);
		return;
		() => {
			window.removeEventListener('keydown', keydownHandler);
		},
			[thirdPerson];
	});

	return (
		<Suspense fallback={null}>
			<Perf position='top-left' />
			<PerspectiveCamera makeDefault position={cameraPosition} fov={40} />
			{!thirdPerson && <OrbitControls target={[-2.64, -0.71, 0.03]} />}
			<Environment background={'both'} files={'/textures/envmap.hdr'} />
			<Float
				position={[-1, 0.3, 0]}
				scale={0.2}
				rotationIntensity={1.5}
				speed={5}
			>
				<mesh>
					<boxGeometry />
					<meshBasicMaterial map={eightBit} />
				</mesh>
			</Float>
			<ColliderBox position={[-1, 0.3, 0]} scale={[0.2, 0.2, 0.2]} />
			<Track />
			<Ground />
			<Car thirdPerson={thirdPerson} />
		</Suspense>
	);
};
