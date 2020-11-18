import React from 'react';

const withData = (WrapperComponent) => {
  class hocClass extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        error: false,
        user: null,
      };
    }

    render() {
      return (
        <div>
          <h1>Header</h1>
          <WrapperComponent {...this.props} {...this.state} />
          <h1>Footer</h1>
        </div>
      );
    }
  }

  return hocClass;
};

export default withData;
