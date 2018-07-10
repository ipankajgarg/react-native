import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './common/Card';

class BatchList extends Component {
  render() {
    return (
      <View
        style={{
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          marginBottom: 10
        }}
      >
        <Card>
          <View
            style={{
              backgroundColor: 'white',

              paddingLeft: 10,
              paddingRight: 10
            }}
          >
            <Text
              style={{
                color: '#4867AA',
                fontSize: 22,
                fontWeight: 'bold',
                marginBottom: 10
              }}
            >
              Batch 1
            </Text>
            <View
              style={{
                height: 130,
                borderWidth: 1,
                borderColor: 'white',

                justifyContent: 'space-around',
                backgroundColor: 'white',
                borderRadius: 5
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
                    Class-XII
                  </Text>
                </View>
                <View style={{ marginLeft: 'auto' }}>
                  <Text style={{ fontSize: 17, marginLeft: 'auto' }}>
                    Timing:5 to 6
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
                  Subject:
                </Text>
                <Text style={{ fontSize: 16, color: 'grey', marginLeft: 5 }}>
                  Science (English)
                </Text>
              </View>
              <View
                style={{
                  borderTopWidth: 1,
                  borderColor: 'lightgrey',
                  width: 250
                }}
              />
              <View
                style={{
                  flexDirection: 'row'
                }}
              >
                <View>
                  <Text style={{ fontSize: 17 }}>Days</Text>
                </View>
                <View style={{ marginLeft: 'auto' }}>
                  <Text
                    style={{
                      fontSize: 17,
                      color: '#4867AA',
                      fontWeight: 'bold'
                    }}
                  >
                    Sun Mon Tue
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Card>
      </View>
    );
  }
}
export default BatchList;
