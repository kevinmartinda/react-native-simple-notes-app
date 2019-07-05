import React from 'react';
import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import NotesScreen from '../Screens/NotesScreen';
import NotesFormScreen from '../Screens/NotesFormScreen';
import NotesEditScreen from '../Screens/NotesEditScreen';
import DrawerCustom from '../DrawerCustom';



const HomeStackNavigator = createStackNavigator({
    Home: { screen: NotesScreen, navigationOptions:{
        header: () => null
    }},
    AddNotes: { screen: NotesFormScreen, navigationOptions:{
        header: () => null
    } },
    EditNotes: { screen: NotesEditScreen, navigationOptions:{
        header: () => null
    } }
},{
    initialRouteName: 'Home',
})

const customizedDrawer = (props) => {
    
        return(<DrawerCustom navigation={props.navigation} />)
    
}

const DrawerNavigator = createDrawerNavigator({
    Notes: { 
        screen: HomeStackNavigator, 
        navigationOptions: {
            drawerIcon: ({tintColor}) => (
                <Icon name="home" />
            ),
            drawerLabel: 'Home'
        }
    }
    },{
        contentComponent: customizedDrawer
    })

export default AppNavigator = createAppContainer(DrawerNavigator)