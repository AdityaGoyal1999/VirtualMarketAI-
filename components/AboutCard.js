import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

function AboutCard() {
  return (
    <Card style={styles.card}>
      <Text style={styles.cardText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a dui
        ipsum. Suspendisse lacinia at dui a facilisis. Proin laoreet nec erat
        eget ornare. In posuere purus ex, vel feugiat elit ultrices vel. Integer
        mollis, nisl non lacinia feugiat, sem justo aliquet est, id efficitur
        diam elit a lorem. Ut pellentesque urna ac nibh euismod suscipit vitae
        vel dui. Etiam quis mauris in elit dapibus aliquam. Vestibulum id diam
        vitae libero tristique rhoncus sed sit amet dui. Nullam nec ipsum urna.
        Phasellus eu feugiat risus.
        Curabitur dapibus dignissim enim congue
        ullamcorper. Mauris sollicitudin vitae sapien ac tristique. Duis vitae
        orci et nibh ornare euismod nec vel purus. Etiam ac vulputate quam, et
        lobortis ipsum. Vivamus at malesuada nisi. Ut ultrices rhoncus velit, ac
        sagittis sem bibendum et. In ultrices sagittis interdum. Nullam viverra
        dui leo, at ultrices mi luctus eu. 
        Fusce eu sapien efficitur, sodales
        purus dapibus, congue lacus. Morbi rhoncus tortor et nibh fringilla, ut
        porttitor est egestas. Pellentesque porttitor non ex at laoreet.
        Suspendisse et egestas elit, id lacinia nibh. Duis efficitur congue
        tincidunt.
      </Text>
      
    </Card>
  );
}

const styles = StyleSheet.create({
  cardText: {
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'justify',
  },
  card:{
    elevation: 5,
  }
});

export default AboutCard;
