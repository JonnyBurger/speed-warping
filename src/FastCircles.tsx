import {Freeze, interpolate, useCurrentFrame} from 'remotion';
import {Circles} from './Circles';
import {remapSpeed} from './remap-speed';

export const FastCircles = () => {
	const frame = useCurrentFrame();
	const remappedFrame = remapSpeed({
		frame,
		speed: (fr) =>
			interpolate(fr, [0, 400], [0.5, 4], {
				extrapolateRight: 'clamp',
			}),
	});

	return (
		<Freeze frame={remappedFrame}>
			<Circles />
		</Freeze>
	);
};
