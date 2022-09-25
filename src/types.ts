import { ResponsiveValue, CSSProperties } from '@andideve/sx-core';

export interface ShadowProps {
  boxShadow?: ResponsiveValue<CSSProperties['boxShadow']>;
  textShadow?: ResponsiveValue<CSSProperties['textShadow']>;
}
