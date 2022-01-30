import {AbsoluteFill, Sequence} from 'remotion';
import {Circle} from './Circle';

export const MyComposition = () => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
			}}
		>
			{new Array(1000).fill(true).map((_, index) => {
				return (
					<Sequence durationInFrames={100} from={index * 10}>
						<Circle color={index % 2 === 0 ? '#4290f5' : 'white'} />
					</Sequence>
				);
			})}
		</AbsoluteFill>
	);
};
