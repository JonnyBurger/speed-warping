import {Composition} from 'remotion';
import {Circle} from './Circle';
import {Circles} from './Circles';
import {FastCircles} from './FastCircles';

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
				defaultProps={{
					color: '#4290f5',
				}}
			/>
			<Composition
				id="Circles"
				component={Circles}
				durationInFrames={1000}
				fps={30}
				width={1080}
				height={1080}
			/>
			<Composition
				id="FastCircles"
				component={FastCircles}
				durationInFrames={1000}
				fps={30}
				width={1080}
				height={1080}
			/>
		</>
	);
};
