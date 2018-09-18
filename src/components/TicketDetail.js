import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  findNodeHandle
} from 'react-native';
import QRCode from 'react-native-qrcode';
import { BlurView } from 'react-native-blur';

import MovieRating from './MovieRating';

const { width, height } = Dimensions.get('window');

class TicketDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewRef: 0,
    };
  }

  imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.refs.backgroundImage) });
  }

  render() {
    const {
      containerStyle,
      backgroundImageContainer,
      blurView,
      ticketContainer,
      ticketDetailContainer,
      movieNameContainer,
      movieName,
      posterContainer,
      poster,
      ticketInfoContainer,
      ticketInfoRow,
      ticketInfoRowLabel,
      ticketInfoRow1Value,
      ticketInfoRow2Value,
      ticketInfoColumn,
      qrCodeContainer
    } = styles;

    return (
      <ScrollView contentContainerStyle={containerStyle}>
        <Image
           source={{ uri: 'https://static.omelete.uol.com.br/media/extras/conteudos/creed_HBjMEqi.jpg' }}
           style={backgroundImageContainer}
           ref={'backgroundImage'}
           onLoadEnd={this.imageLoaded.bind(this)}
        >
          <BlurView
            blurRadius={15}
            downsampleFactor={10}
            overlayColor={'rgba(255, 255, 255, .25)'}
            style={blurView}
            viewRef={this.state.viewRef}
          />
          <View style={ticketContainer}>
           <View style={ticketDetailContainer}>
             <View style={movieNameContainer}>
               <Text style={movieName}>
                 ASSASIN'S CREED
               </Text>
             </View>
             <View style={posterContainer}>
               <Image
                 style={poster}
                 source={{ uri: 'https://static.omelete.uol.com.br/media/extras/conteudos/creed_HBjMEqi.jpg' }}
               />
             </View>
             <View style={ticketInfoContainer}>
               <View style={ticketInfoRow}>
                 <View style={ticketInfoColumn}>
                   <Text style={ticketInfoRowLabel}>SCREEN</Text>
                   <Text style={ticketInfoRow1Value}>18</Text>
                 </View>
                 <View style={ticketInfoColumn}>
                   <Text style={ticketInfoRowLabel}>ROW</Text>
                   <Text style={ticketInfoRow1Value}>H</Text>
                 </View>
                 <View style={ticketInfoColumn}>
                   <Text style={ticketInfoRowLabel}>SEAT</Text>
                   <Text style={ticketInfoRow1Value}>34</Text>
                 </View>
               </View>
               <View style={ticketInfoRow}>
                 <View style={ticketInfoColumn}>
                   <Text style={ticketInfoRowLabel}>PRICE</Text>
                   <Text style={ticketInfoRow2Value}>$5.90</Text>
                 </View>
                 <View style={ticketInfoColumn}>
                   <Text style={ticketInfoRowLabel}>DATE</Text>
                   <Text style={ticketInfoRow2Value}>21/12/2016</Text>
                 </View>
                 <View style={ticketInfoColumn}>
                   <Text style={ticketInfoRowLabel}>TIME</Text>
                   <Text style={ticketInfoRow2Value}>20:30</Text>
                 </View>
               </View>
             </View>
             <View style={qrCodeContainer}>
               <QRCode
                value="https://www.youtube.com/watch?v=oHg5SJYRHA0"
                size={200}
                bgColor='#000'
                fgColor='white'
               />
             </View>
           </View>
         </View>
       </Image>
      </ScrollView>
    );
  }
}

const styles = {
  containerStyle: {
    paddingTop: 50,
    backgroundColor: '#121315'
  },
  backgroundImageContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    resizeMode: 'cover',
    width: null,
    height: null
  },
  blurView: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  },
  ticketContainer: {
    alignItems: 'center',
    elevation: 4
  },
  ticketDetailContainer: {
    marginTop: 20,
    marginBottom: 20,
    width: width * 0.9,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  ticketInfoContainer: {
    flexDirection: 'column',
    borderBottomWidth: 2,
    borderColor: '#121315'
  },
  ticketInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  ticketInfoRowLabel: {
    fontSize: 12,
    color: '#000',
    fontWeight: '400'
  },
  ticketInfoRow1Value: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600'
  },
  ticketInfoRow2Value: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600'
  },
  ticketInfoColumn: {
    flexDirection: 'column',
    padding: 20
  },
  movieNameContainer: {
    alignItems: 'center'
  },
  movieName: {
    padding: 10,
    fontSize: 25,
    fontWeight: '600',
    color: '#000'
  },
  poster: {
    height: height * 0.3
  },
  qrCodeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
};

export default TicketDetail;
