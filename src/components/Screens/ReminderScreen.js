import React, { Component } from 'react';
import { View } from 'native-base';
import MyHeader from '../MyHeader';



class ReminderScreen extends Component {

    render() {
        return(
            <View>
                <MyHeader navigation={this.props.navigation} page="Reminder" />
            </View>
        )
    }
}

export default ReminderScreen;