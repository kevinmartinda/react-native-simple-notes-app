import React, { Component } from 'react';
import { TouchableOpacity, Image, Modal } from 'react-native';
import { Text, Thumbnail, Header, Left, Right, Body, View, ListItem, List } from 'native-base';
import { connect } from 'react-redux';
import { getSort } from '../public/redux/action/notes'

class MyHeader extends Component {
    constructor() {
        super()
        this.state = {
            modalVisible: false
        }
    }

    setVisible(visibel){
        this.setState({modalVisible: visibel})
    }

    getSort = (type, search) => {
        this.props.dispatch(getSort(type, search))
    }

    render() {
        return(
            <View>
            <Header style={{backgroundColor:'white'}}>
                <Left style={{flex:1}}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                    <Thumbnail
                        source={require('../../assets/logo.jpeg')}
                        style={{ width: 45, height: 45}}
                    />
                    </TouchableOpacity>
                </Left>
                <Body style={{flex: 2, alignSelf:'center', alignContent:'center', alignItems:'center'}}>
                    <Text style={{fontWeight:'bold', fontSize:20}}>{this.props.page}</Text>
                </Body>
                <Right style={{flex:1}}>
                <TouchableOpacity transparet
                onPress={() => {
                  this.setVisible(true)
                }}>
                <Image source={require('../../assets/desc.png')} style={{width: 20, height: 20, marginRight: 10}} />
                </TouchableOpacity>
                </Right>
            </Header>
            <View>
            
            <TouchableOpacity onPress={() => this.setVisible(!this.state.modalVisible)}> 
            <Modal
            animationType="fade"
            animated={true}
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
                this.setVisible(!this.state.modalVisible);
            }}>
            <View style={{
                borderWidth: 0.4,
                marginTop: 50,
                width: 150,
                position: 'absolute',
                alignSelf: 'flex-end',
                marginRight: 20,
                right: 3,
                backgroundColor: 'white'}}>
                <View>
                <List>
                    <ListItem>
                    <TouchableOpacity
                        onPress={() => {this.props.dispatch(getSort('asc', this.props.notes.search))
                            this.setVisible(!this.state.modalVisible);
                        }}>
                        <Text>Ascending</Text>
                    </TouchableOpacity>
                    </ListItem>

                    <ListItem>
                    <TouchableOpacity
                        onPress={() => { this.props.dispatch(getSort('desc', this.props.notes.search))
                            this.setVisible(!this.state.modalVisible);
                        }}>
                        <Text>Descending</Text>
                    </TouchableOpacity>
                    </ListItem>
                </List>
                </View>
            </View>
            </Modal>
            </TouchableOpacity>
            </View>
            </View>
        )
    }
}

export default connect(state => ({notes: state.notes}))(MyHeader);