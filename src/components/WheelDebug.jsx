import { MeshTransmissionMaterial } from "@react-three/drei";

const debug = true;

export const WheelDebug = ({ radius, wheelRef }) => {
	return (
		debug && (
			<group ref={wheelRef}>
				<mesh rotation={[0, 0, Math.PI / 2]}>
					<cylinderGeometry args={[radius, radius, 0.015, 16]} />
					{/* <meshNormalMaterial transparent={true} opacity={0.25} /> */}
					<MeshTransmissionMaterial
						transmissionSampler={true}
						backside={true}
						samples={4}
						transmission={1}
						thickness={0.5}
						chromaticAberration={5}
						anisotropy={1}
						distortion={1}
						distortionScale={0.3}
						temporalDistortion={0.02}
						ior={1.8}
						clearcoat={0.82}
						attenuationDistance={1}
						roughness={0.05}
					/>
				</mesh>
			</group>
		)
	);
};
