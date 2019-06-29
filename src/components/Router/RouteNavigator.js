import React from 'react';;
import {ScrollView, Image, SafeAreaView, Modal, FlatList} from 'react-native';
import { createAppContainer, createDrawerNavigator, createStackNavigator, DrawerItems } from 'react-navigation';
import { Icon, View, Thumbnail, Text, ListItem, Button, Form, Left } from 'native-base';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'

import NotesScreen from '../Screens/NotesScreen';
import NotesFormScreen from '../Screens/NotesFormScreen';
import TodoScreen from '../Screens/TodoScreen';
import MemoScreen from '../Screens/MemoScreen';
import ReminderScreen from '../Screens/ReminderScreen';
import NotesEditScreen from '../Screens/NotesEditScreen';
import axios from 'axios';

class DrawerCustom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            arrayCategory: []
        }
    }

    componentDidMount() {
        axios.get('http://192.168.43.10:3001/categories')
            .then(result => (
                this.setState({
                    arrayCategory: result.data.values
                })
            ))
            .catch(err => {
                console.warn('cannot load data..')
            })
    }

    setVisible = value => {
        this.setState({modalVisible: value})
    }

    render() {
        return(
            <SafeAreaView>
            <ScrollView>
            <View style={{height: 150, backgroundColor: 'white'}}>
                <Thumbnail source={require('../../../assets/logo.jpeg')} style={{marginTop: 15,alignSelf: 'center', width: 100, height:100, borderRadius: 60}} />    
            </View>
            <View style={{textAlign: 'center', alignSelf: 'center'}}>
                <Text>
                    Kevin M. Sodikin
                </Text>
            </View>
            
            <FlatList
                data={this.state.arrayCategory}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate(item.name)}>
                        <ListItem noBorder >
                            <Left>
                            <Image source={require('../../../assets/work.png')} style={{width:20, height:20, marginRight:20}} />
                                <Text style={{fontSize: 18}}>{item.name}</Text>
                            </Left>
                        </ListItem>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={item => item.id.toString()} />
            
            <TouchableOpacity onPress={() => this.setVisible(true)} style={{flex:1}}>
            <ListItem noBorder>
            <Left>
                <Icon
                    name="add"
                    style={{ color: '#777',fontSize: 28, width: 38}}

                />
                <Text style={{fontSize: 18}}>Category</Text>
            </Left>
            </ListItem>
            </TouchableOpacity>
            </ScrollView>
            <View>
            <View>
            
                <Modal transparent={true} visible={this.state.modalVisible} >
                    <View style={{backgroundColor:'white',height: 200, left:'15%', top:"40%", bottom:'5%', left:'5%', marginEnd:60, padding:10, borderWidth:0.5, borderRadius:20}}>
                        <Form>
                            <TextInput placeholder="judul" style={{marginBottom:10, borderBottomWidth:2, borderBottomColor:'grey'}} />
                            <TextInput placeholder="url" style={{marginBottom:10, borderBottomWidth:2, borderBottomColor:'grey'}} />
                        </Form>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', padding:5}}>
                        <Button transparent onPress={() => this.setState({modalVisible: false})}>
                            <Text>Add</Text>
                        </Button>
                        <Button transparent onPress={() => this.setState({modalVisible: false})}>
                            <Text>Cancel</Text>
                        </Button>
                        </View>
                    </View>
                </Modal>
            </View>
            </View>
        </SafeAreaView>
        )
    }
}

const HomeStackNavigator = createStackNavigator({
    Home: { screen: NotesScreen, navigationOptions:{
        header: () => null
    }},
    AddNotes: { screen: NotesFormScreen },
    EditNotes: { screen: NotesEditScreen }
},{
    initialRouteName: 'Home',
})

const TodoStackNavigator = createStackNavigator({
    Home: { screen: TodoScreen, navigationOptions:{
        header: () => null
    } },
    Back: { screen: NotesScreen}
},{
    initialRouteName: 'Home',
})

const ReminderStackNavigator = createStackNavigator({
    Home: { screen: ReminderScreen, navigationOptions:{
        header: () => null
    }},
    Back: { screen: NotesScreen }
},{
    initialRouteName: 'Home',
})

const MemoStackNavigator = createStackNavigator({
    Home: { screen: MemoScreen, navigationOptions:{
        header: () => null
    }},
    Back: { screen: NotesScreen }
},{
    initialRouteName: 'Home',
})

const DrawerNavigator = createDrawerNavigator({
    Notes: { 
        screen: HomeStackNavigator, 
        navigationOptions: {
            drawerIcon: ({tintColor}) => (
                <Icon name="home" />
            ),
            drawerLabel: 'Home'
        }
    },
    Memo: {
        screen: MemoStackNavigator, 
        navigationOptions: {
            drawerIcon: ({tintColor}) => (
                <Image source={require('../../../assets/work.png')} style={{width:20, height:20}} />
            ),
        }
    },
    Reminder: {
        screen: ReminderStackNavigator, 
        navigationOptions: {
            drawerIcon: ({tintColor}) => (
                <Image source={require('../../../assets/writing.png')} style={{width:20, height:20}} />
            ),
        }
    },
    Todo: {
        screen: TodoStackNavigator, 
        navigationOptions: {
            drawerIcon: ({tintColor}) => (
                <Image source={require('../../../assets/wishlist.png')} style={{width:20, height:20}} />
            ),
        }
    }
    },{
        contentComponent: DrawerCustom
    })

export default AppNavigator = createAppContainer(DrawerNavigator)