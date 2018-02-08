import Component from '@ember/component';
import codeSplitting from './-utils/code-splitting';
import jsModules from './-utils/js-modules-api';
import routerService from './-utils/router-service';
import QUnitSimplification from './-utils/qunit-simplification';
import moduleUnification from './-utils/module-unification';
import glimmerCompat from './-utils/glimmer-compat';

const features = [
  jsModules[0],
  routerService[0],
  QUnitSimplification[0],
  moduleUnification[0],
  glimmerCompat[0],
  codeSplitting[0]
];

export default Component.extend({
  features
});
