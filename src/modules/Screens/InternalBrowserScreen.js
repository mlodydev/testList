import React from 'react';
import {WebView} from 'react-native-webview';
import {useNavigationParam} from 'react-navigation-hooks';
import {StyleSheet} from 'react-native';
import MaterialHeaderMenu from '../Basic_components/MaterialHeaderMenu';

const InternalBrowser = () => {
  const paramsUri = useNavigationParam('uri');
  return <WebView source={{uri: paramsUri}} style={styles.web} />;
};

InternalBrowser.navigationOptions = screenProps => ({
  headerRight: () => (
    <MaterialHeaderMenu link={screenProps.navigation.getParam('uri')} />
  ),
});

const styles = StyleSheet.create({
  container: {},
  web: {
    flex: 1,
  },
});

export default InternalBrowser;
