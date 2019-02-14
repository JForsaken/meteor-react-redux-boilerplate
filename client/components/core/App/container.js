import { connect } from 'react-redux';
import { getRoute, getIsNavigating } from 'fans-router';
import App from './component';


const mapState = state => ({
  route: getRoute(state),
  navigating: getIsNavigating(state),
});

export default connect(mapState)(App);
