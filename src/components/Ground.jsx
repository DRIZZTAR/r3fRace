import { MeshReflectorMaterial } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { BufferAttribute } from 'three';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export function Ground() {
	const [gridMap, aoMap, alphaMap] = useLoader(TextureLoader, [
		'/textures/grid.png',
		'/textures/ground-ao.png',
		'/textures/alpha-map.png',
	]);

	useEffect(() => {
		gridMap.anisotropy = 16;
	}, [gridMap]);

	const meshRef = useRef(null);

	useEffect(() => {
		let uvs = meshRef.current.geometry.attributes.uv.array;
		meshRef.current.geometry.setAttribute(
			'uv2',
			new BufferAttribute(uvs, 2)
		);
	}, [meshRef.current]);

	return (
		<mesh
			ref={meshRef}
			position={[-2.285, -0.015, -1.325]}
			rotation={[-Math.PI * 0.5, 0, -Math.PI * 0.5]}
		>
			<circleGeometry args={[6.12, 50]}/>
			<MeshReflectorMaterial />
		</mesh>
	);
}
