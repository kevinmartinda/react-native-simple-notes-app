import React, { Component } from 'react';
import { Card, CardItem, Body, Text, View } from 'native-base';
import { StyleSheet } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

class CardList extends Component {
    render() {
        return(
            <View style={{ flex: 1, flexDirection: 'column', elevation:5, fontWeight:'bold', margin: 5, padding:10, height:190, borderRadius:15, backgroundColor:color[this.props.notes.Category.id - 1] }}>
              <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('EditNotes', {data: this.props.notes, category: this.props.category})}>
              <Text style={{textAlign:'left', fontSize:10}}>{this.props.notes.Category.name}</Text>
              <Text style={{textAlign:'right', fontSize:8, margin:3}}>12-12-2019</Text>
              <Text style={{justifyContent:'center', alignItems:'center', fontSize:16, textAlign:'center', color:'white'}}>{this.props.notes.title}</Text>
              <View>
                  <Text numberOfLines={5} style={{color:'white', fontSize:12, margin:5}}>
                      {this.props.notes.note}
                  </Text>
              </View>
              </TouchableOpacity>
              </View>
            </View>
            )
    }
}

export default CardList;

const color = ['#2FC2DF', '#C0EB6A', '#FAD06C', '#FF92A9', '#F4F2B0', '#F91023', '#2114E1', '#32E903']