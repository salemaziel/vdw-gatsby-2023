import Particles from "react-particles";
import { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

export class ParticlesContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.customInit = this.customInit.bind(this);
  }
  // this customizes the component tsParticles installation
  //async customInit(engine: Engine): Promise<void> {
    async customInit(engine) {
    // this adds the preset to tsParticles, you can safely use the
    //await loadStarsPreset(engine);
    await loadStarsPreset(engine);
  }

  render() {
    const options = {
      preset: "stars",
    };

    return <Particles options={options} init={this.customInit} />;
  }
}