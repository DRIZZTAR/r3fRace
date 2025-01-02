import { useBox, useRaycastVehicle } from '@react-three/cannon';
import { MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useControls } from '../hooks/useControls';
import { useWheels } from '../hooks/useWheels';
import { WheelDebug } from './WheelDebug';
export function Car() {
	let mesh = useLoader(GLTFLoader, '/models/car.glb').scene;

	const position = [-1.5, 0.5, 3];
	const width = 0.15;
	const height = 0.07;
	const front = 0.15;
	const wheelRadius = 0.05;

	const chassisBodyArgs = [width, height, front * 2];
	const [chassisBody, chassisApi] = useBox(
		() => ({
			args: chassisBodyArgs,
			mass: 150,
			position,
		}),
		useRef(null)
	);

	const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);

	const [vehicle, vehicleApi] = useRaycastVehicle(
		() => ({
			chassisBody,
			wheelInfos,
			wheels,
		}),
		useRef(null)
	);

  useControls(vehicleApi, chassisApi);

	useEffect(() => {
		mesh.scale.set(0.0012, 0.0012, 0.0012);
		mesh.children[0].position.set(-365, -18, -67);
	}, [mesh]);

	return (
		<group ref={vehicle} name='vehicle'>
			{/* <primitive object={mesh} rotation-y={Math.PI} /> */}
			<mesh ref={chassisBody}>
				{/* <meshBasicMaterial transparent={true} opacity={0.3} /> */}
				<MeshTransmissionMaterial
					transmissionSampler={true}
					backside={true}
					samples={4}
					transmission={1}
					thickness={0.5}
					chromaticAberration={10}
					anisotropy={1}
					distortion={1}
					distortionScale={0.3}
					temporalDistortion={0.02}
					ior={1.8}
					clearcoat={2}
					attenuationDistance={1}
					roughness={0.05}
				/>
				<boxGeometry args={chassisBodyArgs} />
			</mesh>
			<WheelDebug wheelRef={wheels[0]} radius={wheelRadius} />
			<WheelDebug wheelRef={wheels[1]} radius={wheelRadius} />
			<WheelDebug wheelRef={wheels[2]} radius={wheelRadius} />
			<WheelDebug wheelRef={wheels[3]} radius={wheelRadius} />
		</group>
	);
}
