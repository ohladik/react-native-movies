import React, { Component } from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import update from 'immutability-helper';

const { width, height } = Dimensions.get('window');

class SeatsMap extends Component {
  constructor(props) {
   super(props);
   this.state = { seats: this.props.seats, selectedSeats: [] };
 }

  updateSeat = (row) => {
    const selected = this.state.selectedSeats.indexOf(row.seatID) !== -1;
    const taken = row.status === 'Taken';
    // select seat if it is not taken or selected
    if (!taken && !selected) {
      this.setState({ selectedSeats: update(this.state.selectedSeats, { $push: [row.seatID] }) });
      // unselect selected seat
    } else if (!taken && selected) {
       this.setState({ selectedSeats: update(this.state.selectedSeats, {
         $apply: function (selectedSeats) {
                  const updatedSeats = [];
                  selectedSeats.forEach(function (seatID) {
                     if (seatID !== row.seatID) {
                       updatedSeats.push(seatID);
                     }
                   }
                 );
                 return updatedSeats;
         }
        })
       });
    }
  }

  render() {
    const {
      viewContainer,
      seatsColumn
    } = styles;

    return (
      <View style={viewContainer}>
        <View style={seatsColumn}>
          {this.state.seats.map((row, index) => (
            index < 6 ?
            <TouchableOpacity key={row.seatID} onPress={() => this.updateSeat(row)}>
              <View style={this.state.selectedSeats.indexOf(row.seatID) !== -1 ? styles.Selected : styles[row.status]} />
            </TouchableOpacity>
            : null
          ))}
        </View>
        <View style={seatsColumn}>
          {this.state.seats.map((row, index) => (
            index > 5 && index < 12 ?
            <TouchableOpacity key={row.seatID} onPress={() => this.updateSeat(row)}>
              <View style={this.state.selectedSeats.indexOf(row.seatID) !== -1 ? styles.Selected : styles[row.status]} />
            </TouchableOpacity>
            : null
          ))}
        </View>
        <View style={seatsColumn}>
          {this.state.seats.map((row, index) => (
            index > 11 && index < 18 ?
            <TouchableOpacity key={row.seatID} onPress={() => this.updateSeat(row)}>
              <View style={this.state.selectedSeats.indexOf(row.seatID) !== -1 ? styles.Selected : styles[row.status]} />
            </TouchableOpacity>
            : null
          ))}
        </View>
        <View style={seatsColumn}>
          {this.state.seats.map((row, index) => (
            index > 17 && index < 24 ?
            <TouchableOpacity key={row.seatID} onPress={() => this.updateSeat(row)}>
              <View style={this.state.selectedSeats.indexOf(row.seatID) !== -1 ? styles.Selected : styles[row.status]} />
            </TouchableOpacity>
            : null
          ))}
        </View>
        <View style={seatsColumn}>
          {this.state.seats.map((row, index) => (
            index > 23 && index < 30 ?
            <TouchableOpacity key={row.seatID} onPress={() => this.updateSeat(row)}>
              <View style={this.state.selectedSeats.indexOf(row.seatID) !== -1 ? styles.Selected : styles[row.status]} />
            </TouchableOpacity>
            : null
          ))}
        </View>
        <View style={seatsColumn}>
          {this.state.seats.map((row, index) => (
            index > 29 && index < 36 ?
            <TouchableOpacity key={row.seatID} onPress={() => this.updateSeat(row)}>
              <View style={this.state.selectedSeats.indexOf(row.seatID) !== -1 ? styles.Selected : styles[row.status]} />
            </TouchableOpacity>
            : null
          ))}
        </View>
        <View style={seatsColumn}>
          {this.state.seats.map((row, index) => (
            index > 35 ?
            <TouchableOpacity key={row.seatID} onPress={() => this.updateSeat(row)}>
              <View style={this.state.selectedSeats.indexOf(row.seatID) !== -1 ? styles.Selected : styles[row.status]} />
            </TouchableOpacity>
            : null
          ))}
        </View>
      </View>
    );
  }
}

const styles = {
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Available: {
    width: 20,
    height: 20,
    margin: 2,
    borderRadius: 10,
    backgroundColor: '#CCCCCC'
  },
  Taken: {
    width: 20,
    height: 20,
    margin: 2,
    borderRadius: 10,
    backgroundColor: '#808080'
  },
  Selected: {
    width: 20,
    height: 20,
    margin: 2,
    borderRadius: 10,
    backgroundColor: '#00ADE7'
  },
  seatsColumn: {
    flex: 1,
    flexDirection: 'column'
  }
};

export default SeatsMap;
