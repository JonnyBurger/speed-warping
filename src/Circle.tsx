import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const Circle: React.FC<{
	color: string;
}> = ({color}) => {
	const frame = useCurrentFrame();
	const scale = interpolate(frame, [0, 200], [0, 5]);
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					backgroundColor: color,
					height: '100%',
					width: '100%',
					borderRadius: '50%',
					transform: `scale(${scale})`,
				}}
			/>
		</AbsoluteFill>
	);
};
