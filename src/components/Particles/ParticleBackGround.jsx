import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from "./ParticlesConfig";
// import particleConfig from "./ParticlesConfig";
// import particlesConfig from "./ParticlesConfig";

export default function ParticleBackground() {
	const particlesInit = async (main) => {
		
		await loadFull(main);
	};
	const particlesLoaded = (container) => {
		
	};
	return (
		<Particles
			style={{width:"300px", minHeight:"100vh"}}
			options={particleConfig} 
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
		/>
	);
}
