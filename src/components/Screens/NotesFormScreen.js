import React, { Component } from 'react';
import { Image, Picker } from 'react-native';
import { View, Text, Button, Icon, Form, Header, Left, Right, Body } from 'native-base';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import { addNotes } from '../../public/redux/action/notes'

import MyHeader from '../MyHeader'

class NotesFormScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            category: 'asdasd',
            title: '',
            note: '',
            categoryId: 0
        }
    }

    AddNote = async (data) => {
        try {
            await this.props.dispatch(addNotes(data))
        } catch(err) {
            console.log(err)
        }
    }

    handleAdd = () => {
        this.AddNote({title: this.state.title, note: this.state.note, categoryId: this.state.category})
        this.props.navigation.navigate('Home')
        }

    render() {
        return(
            <View>
                <Header style={{backgroundColor:'white'}}>
                <Left style={{flex:1}}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Icon name="arrow-back" />
                    </TouchableOpacity>
                </Left>
                <Body style={{flex: 2, alignSelf:'center', alignContent:'center', alignItems:'center'}}>
                    <Text style={{fontWeight:'bold', fontSize:20}}>Add Note</Text>
                </Body>
                <Right style={{flex:1}}>
                <TouchableOpacity transparet
                onPress={() => {this.state.title !== '' && this.state.note !== '' ? this.handleAdd() : alert('FIll the empty input!')}}>
                <Icon name="md-checkmark-circle-outline" />
                </TouchableOpacity>
                </Right>
            </Header>
                <Form>
                    <TextInput  maxLength={64} style={{
                        fontSize: 14,
                        padding: 20,
                        margin: 30,
                    }} placeholder="Add Title"
                    onChangeText={value => {this.setState({title: value})}} />
                    <TextInput style={{
                        fontSize: 14,
                        padding: 20,
                        margin: 30,
                        height: 170
                    }} placeholder="Add Description"
                    onChangeText={value => {this.setState({note: value})}} />
                    <Picker
                        selectedValue={this.state.category}
                        style={{height: 50, padding: 40, margin: 30, elevation:5}}
                        onValueChange={(itemValue, itemIndex) =>
                        this.setState({category: itemValue})
                    }>
                     {
                        this.props.categories.data.map( item => (
                            <Picker.Item key={item.id} label={item.name} value={item.id} />
                            )
                        )
                    }
                    </Picker>
                </Form>
            </View>
        )
    }
}

export default connect(state => ({categories: state.categories}))(NotesFormScreen);