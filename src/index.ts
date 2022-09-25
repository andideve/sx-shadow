import { system, SystemConfig, ThemeKey } from '@andideve/sx-core';
import { ShadowProps } from './types';

const config: SystemConfig<ShadowProps> = {
  boxShadow: {
    property: 'boxShadow',
    scale: ThemeKey.shadows,
  },
  textShadow: {
    property: 'textShadow',
    scale: ThemeKey.shadows,
  },
};

export const shadow = system(config);

export { ShadowProps };
export default shadow;
