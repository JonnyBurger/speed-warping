import {Composition} from 'remotion';
import {Circle} from './Circle';
import {MyComposition} from './Composition';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Circle"
				component={Circle}
				durationInFrames={60}
				fps={30}
				width={1080}
				height={1080}
			/>
			<Composition
				id="Circles"
				component={MyComposition}
				durationInFrames={1000}
				fps={30}
				width={1080}
				height={1080}
			/>
		</>
	);
};
