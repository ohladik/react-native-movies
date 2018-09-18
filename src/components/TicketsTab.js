import React, { Component } from 'react';
import {
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import NewTicket from './NewTicket';
import OldTicket from './OldTicket';

class TicketsTab extends Component {

  render() {
    const { containerStyle } = styles;

    return (
      <ScrollView contentContainerStyle={containerStyle}>
        <TouchableOpacity
          onPress={() => Actions.ticketdetail()}
          activeOpacity={0.7}
        >
          <NewTicket />
       </TouchableOpacity>
       <TouchableOpacity
         onPress={() => Actions.ticketdetail()}
         activeOpacity={0.7}
       >
         <NewTicket />
       </TouchableOpacity>
       <TouchableOpacity
        onPress={() => Actions.ticketdetail()}
        activeOpacity={0.7}
       >
         <OldTicket />
       </TouchableOpacity>
       <TouchableOpacity
         onPress={() => Actions.ticketdetail()}
         activeOpacity={0.7}
       >
         <OldTicket />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Actions.ticketdetail()}
        activeOpacity={0.7}
      >
       <OldTicket />
      </TouchableOpacity>
    </ScrollView>
    );
  }
}

const styles = {
  containerStyle: {
    paddingTop: 50,
    backgroundColor: '#121315',
    alignItems: 'center'
  }
};

export default TicketsTab;
