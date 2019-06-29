import React, { Component } from 'react';
import { Image, Picker } from 'react-native';
import { View, Text, Button, Icon, Form } from 'native-base';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

class NotesFormScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: this.props.navigation.state.params,
            category: 'asdasd'

        }
    }

    // componentDidMount() {
    //     this.setState({
    //         category: [{id:1,name:'akskd'},{id:2,name:'qwerqt'},{id:3,name:'asfasf'}]
    //     })
    // }

    static navigationOptions = ({navigation}) => ({
        headerTitle: 'Add Note',
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

    AddNote() {
        this.setState(this.props.AddNote(data))
    }

    

    render() {
        return(
            <View>
                <Form>
                    <TextInput  maxLength={64} style={{
                        fontSize: 14,
                        padding: 20,
                        margin: 30,
                    }} placeholder="Add Title" />
                    <TextInput style={{
                        fontSize: 14,
                        padding: 20,
                        margin: 30,
                        height: 170
                    }} placeholder="Add Description" />
                    <Picker
                        selectedValue={this.state.category}
                        style={{height: 50, padding: 40, margin: 30, elevation:5}}
                        onValueChange={(itemValue, itemIndex) =>
                        this.setState({category: itemValue})
                    }>
                     {
                        this.state.categories.map( item => (
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

export default NotesFormScreen;