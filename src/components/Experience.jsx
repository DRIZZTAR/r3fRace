import {
	OrbitControls,
	Environment,
	PerspectiveCamera,
	useTexture,
	Float,
} from '@react-three/drei';
import { Suspense, suspense } from 'react';
import { Track } from './Track';
import { Ground } from './Ground';
import { Car } from './Car';
import { ColliderBox } from './ColliderBox';

export const Experience = () => {
	const eightBit = useTexture('/textures/metal8bit.jpg');

	return (
		<Suspense fallback={null}>
			<OrbitControls target={[-2.64, -0.71, 0.03]} />
			<PerspectiveCamera
				makeDefault
				position={[-6, 3.9, 6.21]}
				fov={40}
			/>
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
			<Car />
		</Suspense>
	);
};
