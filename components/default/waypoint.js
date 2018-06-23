import React from 'react';
import ReactDOM from 'react-dom';
import Screen from './utils/screen';

class Waypoint extends React.PureComponent {
  constructor (props) {
    super(props);
  }

  render() {
    return <Screen align="center" direction="row" height="7vh" {...this.props} />;
  }
  // @alan just changed the height to 7 instead of 75 to lower the padding

}

Waypoint._idyll = {
  name: "Waypoint",
  tagType: "open",
  props: [{
    name: "onEnterView",
    type: "event",
    example: "`x = true`"
  }]
}

export default Waypoint;
