import React, { Component} from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="3361464840826445" chatSupport>
        <CustomChat pageId="232771023259984" minimized={false}/>
      </FacebookProvider>    
    );
  }
}