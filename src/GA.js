import React from 'react';
import ReactGA from 'react-ga';

class GA extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.pathname !== prevProps.pathname ||
      this.props.search !== prevProps.search ||
      this.props.hash !== prevProps.hash) {
      this.sendPageView(this.props.pathname, this.props.search, this.props.hash);
    }
  }

  sendPageView(pathname, search = '', hash = '') {
    const page = pathname + search + hash;
    ReactGA.pageview(page);
  }

  render() {
    return null;
  }

}

export default GA;