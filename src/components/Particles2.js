import React from 'react';
import Particles from 'react-particles';
import { Engine } from 'tsparticles-engine';
import { loadStarsPreset } from 'tsparticles-preset-stars';

export class ParticlesContainer extends React.PureComponent {
  // Use arrow function for class method
  customInit = async (engine) => {
    await loadStarsPreset(engine);
  };

  render() {
    const options = {
      preset: 'stars',
    };

    return <Particles options={options} init={this.customInit} />;
  }
}