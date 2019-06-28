import React, { Component } from 'react';
import { View } from 'native-base';
import MyHeader from '../MyHeader';



class TodoScreen extends Component {

    render() {
        return(
            <View>
                <MyHeader navigation={this.props.navigation} page="Todo" />
            </View>
        )
    }
}

export default TodoScreen;