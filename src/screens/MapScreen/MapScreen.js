import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [
        {
          id: 1,
          title: 'Marker 1',
          description: 'This is Marker 1',
          coordinates: {
            latitude: 37.78825,
            longitude: -122.4324,
          },
        },
        {
          id: 2,
          title: 'Marker 2',
          description: 'This is Marker 2',
          coordinates: {
            latitude: 37.7749,
            longitude: -122.4194,
          },
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} region={this.state.region}>
          {this.state.markers.map((marker) => (
            <Marker
              key={marker.id}
              coordinate={marker.coordinates}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;
