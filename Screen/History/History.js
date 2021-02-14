import React, {Component} from 'react';

import {View, Text} from 'react-native';

class History extends Component {
  constructor(props) {
    super(props);
  }
  showList() {
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      this.setState({
        showList: true,
        
        loading: false,
      });
    }, 5000);
  }
  render() {
    return (
      <FlatList
        key="flatList"
        style={styles.flatList}
        data={this.state.flatListProps}
        ListHeaderComponent={() => (
          <Text style={styles.header} key="FlatList props">
            List Data Flat List
          </Text>
        )}
        keyExtractor={(item, index) => `${item}--${index}`}
        renderItem={({item, index}) => (
          <View style={styles.flatlistRow}>
            <View style={styles.rowHeader}>
              <Text>{item.title}</Text>
            </View>
            <View>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    );
  }
}
export default History;
