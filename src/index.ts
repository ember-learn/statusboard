import App from './main';
import { ComponentManager, setPropertyDidChange } from '@glimmer/component';

const app = new App();
const containerElement = document.getElementById('content');

setPropertyDidChange(() => {
  app.scheduleRerender();
});

app.registerInitializer({
  initialize(registry) {
    registry.register(
      `component-manager:/${app.rootName}/component-managers/main`,
      ComponentManager
    );
  }
});

app.renderComponent('Statusboard', containerElement, null);

app.boot();
