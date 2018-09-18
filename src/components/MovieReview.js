import React, { Component } from 'react';
import {
  LayoutAnimation,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';

const CustomLayoutAnimation = {
  duration: 100,
  create: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.linear,
  },
};

const { width } = Dimensions.get('window');


class MovieReview extends Component {
  componentWillUpdate() {
   LayoutAnimation.configureNext(CustomLayoutAnimation);
 }

 render() {
   const {
     id,
     selectedReviewID,
     avatarURL,
     name,
     rating,
     reviewText,
   } = this.props;

   const {
     reviewRow,
     reviewImageContainer,
     reviewImage,
     reviewDetail
   } = styles;

   const selectedReview = <Text>{reviewText}</Text>;

   const notSelectedReview = (
     <Text
       numberOfLines={1}
     >
       {reviewText}
     </Text>
   );

   return (
       <View style={reviewRow}>
         <View style={reviewImageContainer}>
           <Image
             style={reviewImage}
             source={{ uri: avatarURL }}
           />
         </View>
         <View style={reviewDetail}>
           <Text>{name}</Text>
           <Text>{rating}</Text>
           {id === selectedReviewID ? selectedReview : notSelectedReview}
         </View>
       </View>
   );
 }
}

const styles = {
  reviewRow: {
    width,
    flexDirection: 'row',
    padding: 10,
  },
  reviewImageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  reviewImage: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
    borderRadius: 500,
    flex: 1,
  },
  reviewDetail: {
    flex: 2,
    flexDirection: 'column',
  },
};

export default MovieReview;
