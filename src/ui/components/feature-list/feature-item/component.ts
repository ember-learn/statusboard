import Component, { tracked } from '@glimmer/component';

export default class FeatureItem extends Component {
    @tracked isOpen = false;

    @tracked('@feature')
    get feature() {
        return this.args.feature;
    }

    @tracked('isOpen')
    get stateClass() {
        if (!this.isOpen) {
            return 'u-hidden';
        }

        return '';
    }

    toggle(event) {
        event.stopPropagation();
        event.preventDefault();
        this.isOpen = !this.isOpen;
    }
    
    // interaction with h2>button should toggle these:
    //aria-expanded on the h2>button
    //aria-hidden on the feature.description
    //the hidden/shown class on the feature.description

    //need an Id and a descriptionId for the aria-controls & aria-labelledby values
};
