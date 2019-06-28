import React, { Component } from 'react';
import { TouchableOpacity, TextInput } from 'react-native';
import { Icon, Form, Picker } from 'native-base';
import { View, Text } from 'native-base';

class NotesEditScreen extends Component {
    constructor(props) {
        super(props)
        const {title, note, Category} = this.props.navigation.state.params.data
        this.state = {
            categories: [],
            category: Category.name,
            title,
            note

        }
    }

    componentDidMount() {
        this.setState({
            categories: this.props.navigation.state.params.category
        })
        console.warn(this.props.navigation.state.params.category)
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
         console.warn(this.state.note)
       }

    noteChange = (value) => {
         this.setState({
           note: value
         })
       }

    render() {
        return(
            <View>
                <Form>
                    <TextInput  maxLength={64} style={{
                        fontSize: 30,
                        margin: 30,
                    }} placeholder="Add Title"
                    value={this.state.title}
                    onChangeText={this.titleChange} />
                    
                    <TextInput style={{
                        fontSize: 30,
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

export default NotesEditScreen;