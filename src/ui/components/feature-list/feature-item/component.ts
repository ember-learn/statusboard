import Component, { tracked } from '@glimmer/component';

export default class FeatureItem extends Component {
    // @tracked isOpen = true;

    @tracked('@feature')
    get feature() {
        return this.args.feature;
    }

    // @tracked('isOpen')
    // get stateClass() {
    //     if(!this.isOpen) {
    //         return 'u-hidden';
    //     }

    //     return '';
    // }

    // toggle() {
    //     this.isOpen = !this.isOpen;
    // }
};
