import Component from "@glimmer/component";
import { default as FeatureService, Feature } from './../../../utils/data';

export default class RoadmapPage extends Component {
  featureService = new FeatureService();

  get features(): Feature[] {
    return this.featureService.fetchFeatures();
  }
}
