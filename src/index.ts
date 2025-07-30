import { typescript, react } from './configs';
import { FlatConfigComposer } from 'eslint-flat-config-utils';

export function config() {
  const composer = new FlatConfigComposer();
  composer.append(typescript());
  composer.append(react());
  return composer;
}
