import Root from './components/core/Root/component';
import render from './components/core/AppContainer/component';
import axios from './rest';
import './main.html';


Meteor.startup(() => {
  Meteor.call('getEnvVars', (err, res) => {
    if (err) {
      throw Error('Environment variables could not be transferred');
    }

    if (res) {
      process.env = {
        ...process.env,
        ...res,
      };
    }

    // render React app
    axios.init();
    render(Root);
  });
});
