import React, { Component } from 'react';
import { Card, CardItem, Body, Text, View } from 'native-base';
import { StyleSheet, Alert } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

import { deleteNotes } from '../public/redux/action/notes'
import { connect } from 'react-redux';

class CardList extends Component {
    deleteNote = (id) => {
        this.props.dispatch(deleteNotes(id))
    }
    render() {
        return(
            <View style={{ flex: 1, flexDirection: 'column', elevation:5, fontWeight:'bold', margin: 5, padding:10, height:190, borderRadius:15, backgroundColor: color[this.props.note.Category ? this.props.note.Category.id : 0] }}>
              <View>
              <TouchableOpacity 
              onLongPress={() => {
                  Alert.alert(
                        'Warning!',
                        'Are you sure want to delete this note?',
                        [
                            {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                            },
                            {text: 'OK', onPress: () => this.deleteNote(this.props.note.id)},
                        ],
                        {cancelable: false},
                  )
              }}
              onPress={() => this.props.navigation.navigate('EditNotes', {data: this.props.note, category: this.props.category})}>
              <Text style={{color: 'white', textAlign:'left', fontSize:10}}>{this.props.note.Category !== null ? this.props.note.Category.name : '-'}</Text>
              <Text style={{color: 'white', textAlign:'right', fontSize:8, margin:3}}>{this.props.note.updatedAt}</Text>
              <Text style={{justifyContent:'center', alignItems:'center', fontSize:16, textAlign:'center', color:'white'}}>{this.props.note.title}</Text>
              <View>
                  <Text numberOfLines={5} style={{color:'white', fontSize:12, margin:5}}>
                      {this.props.note.note}
                  </Text>
              </View>
              </TouchableOpacity>
              </View>
            </View>
            )
    }
}

export default connect(null)(CardList);

const color = ['#2FC2DF', '#C0EB6A', '#FAD06C', '#FF92A9', '#F4F2B0', '#F91023', '#2114E1', '#32E903']