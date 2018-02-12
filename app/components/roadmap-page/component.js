import Component from "@ember/component";
import codeSplitting from "./-utils/code-splitting";
import esClasses from "./-utils/es-classes";
import glimmerCompat from "./-utils/glimmer-compat";
import jsModules from "./-utils/js-modules-api";
import moduleUnification from "./-utils/module-unification";
import QUnitSimplification from "./-utils/qunit-simplification";
import routerService from "./-utils/router-service";

const features = [
  jsModules[0],
  routerService[0],
  QUnitSimplification[0],
  moduleUnification[0],
  glimmerCompat[0],
  codeSplitting[0],
  esClasses[0]
];

export default Component.extend({
  features
});
