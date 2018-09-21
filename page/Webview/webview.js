import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class WebViewComponent extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://test.jubao56.com/share/common.html?pid=2'}}
      />
    );
  }
}