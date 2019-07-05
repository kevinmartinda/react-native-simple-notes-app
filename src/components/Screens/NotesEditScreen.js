import React, { Component } from 'react';
import { TouchableOpacity, TextInput } from 'react-native';
import { Icon, Form, Picker, Header, Body, Left, Right, Text, View } from 'native-base';

import { updateNotes } from '../../public/redux/action/notes'

import { connect } from 'react-redux';

class NotesEditScreen extends Component {
    constructor(props) {
        super(props)
        const {title, note, Category, id} = this.props.navigation.state.params.data
        this.state = {
            category: Category ? Category.id : 1,
            title,
            note,
            id

        }
    }

    static navigationOptions = ({navigation}) => ({
        headerTitle: 'Edit Note',
        headerTitleStyle: {
            textAlign: 'center',
            flexGrow: 1,
            alignSelf: 'center'
        },
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Icon name="md-checkmark" style={{color: 'black', marginRight:10}} />
            </TouchableOpacity>
        )
    })

    titleChange = (value) => {
         this.setState({
           title: value
         })
       }

    noteChange = (value) => {
         this.setState({
           note: value
         })
       }
    
    patchNote = async (data, id) => {
        try {
            await this.props.dispatch(updateNotes(data, id))
        } catch(err) {
            console.log(err)
        }
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
                    <Text style={{fontWeight:'bold', fontSize:20}}>Edit Note</Text>
                </Body>
                <Right style={{flex:1}}>
                <TouchableOpacity transparet
                onPress={() => {
                    this.patchNote({title: this.state.title, note: this.state.note, categoryId: this.state.category}, this.state.id)
                    this.props.navigation.navigate('Home')
                    }}>
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
                    value={this.state.title}
                    onChangeText={this.titleChange} />
                    
                    <TextInput style={{
                        fontSize: 14,
                        padding: 20,
                        margin: 30,
                        height: 170
                    }}
                    multiline
                    numberOfLines={5} 
                    placeholder="Add Description"
                    value={this.state.note}
                    onChangeText={this.noteChange}  />

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

export default connect(state => ({categories: state.categories}))(NotesEditScreen);