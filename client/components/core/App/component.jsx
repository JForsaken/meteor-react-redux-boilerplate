import React from 'react';
import PropTypes from 'prop-types';

import DashboardPage from '../../dashboard/DashboardPage/container';
import LoginPage from '../../login/LoginPage/container';


const renderLayout = component => (
  <div>
    {component}
  </div>
);

const renderView = (route) => {
  if (!route) {
    return null;
  }

  switch (route.name) {
    case 'root.dashboard':
      return renderLayout(<DashboardPage />);
    case 'root.login':
      return <LoginPage />;
    default:
      return <div className="View">404 bro</div>;
  }
};

const App = ({ route, navigating }) => (
  <div className="Main">
    <div className="ViewContainer">
      {renderView(route, navigating)}
    </div>
  </div>
);

App.defaultProps = {
  route: null,
};

App.propTypes = {
  route: PropTypes.shape({}),
  navigating: PropTypes.bool.isRequired,
};


export default App;
