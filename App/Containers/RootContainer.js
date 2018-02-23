import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import ReduxNavigation from '../Navigation/ReduxNavigation';
import { connect } from 'react-redux';
import StartupActions from '../Redux/StartupRedux';

import { StyleProvider, Root } from 'native-base';
import getTheme from '../Themes/components';
import variables from '../Themes/variables/commonColor';

// Styles
import styles from './Styles/RootContainerStyles';

class RootContainer extends Component {
  componentDidMount() {
    this.props.startup();
  }

  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Root style={styles.applicationView}>
          <StatusBar barStyle="light-content" />
          <ReduxNavigation />
        </Root>
      </StyleProvider>
    );
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup())
});

export default connect(null, mapDispatchToProps)(RootContainer);
