import React, { Component } from 'react';;
import {ScrollView, Image, SafeAreaView, Modal, FlatList, Alert} from 'react-native';
import { Icon, View, Thumbnail, Text, ListItem, Button, Form, Left } from 'native-base';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { addCategories, deleteCategories } from '../public/redux/action/categories'
import { getNotesByCategory, getNotes } from '../public/redux/action/notes'


class DrawerCustom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            arrayCategory: [],
            name: '',
            url: ''
        }
    }

    setVisible = value => {
        this.setState({modalVisible: value})
    }

    AddCategory = async data => {
        await this.props.dispatch(addCategories(data))
    }

    render() {
        return(
            <SafeAreaView>
            <ScrollView>
            <View style={{height: 150, backgroundColor: 'white'}}>
                <Thumbnail source={require('../../assets/logo.jpeg')} style={{marginTop: 15,alignSelf: 'center', width: 100, height:100, borderRadius: 60}} />    
            </View>
            <View style={{textAlign: 'center', alignSelf: 'center'}}>
                <Text>
                    Kevin M. Sodikin
                </Text>
            </View>
            <TouchableOpacity onPress={()=> {this.props.dispatch(getNotes())
                        this.props.navigation.closeDrawer()}} >
            <ListItem noBorder>
            <Left>
                <Icon
                    name="home"
                    style={{ color: '#777',fontSize: 28, width: 38}}

                />
                <Text style={{fontSize: 18}}>Home</Text>
            </Left>
            </ListItem>
            </TouchableOpacity>
            
            {
                this.props.categories.isLoading ? console.log('pending') : <FlatList
                data={this.props.categories.data}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity onPress={()=> {this.props.dispatch(getNotesByCategory(item.id))
                        this.props.navigation.closeDrawer()}}
                        onLongPress={() => {
                            Alert.alert(
                                'Warning!',
                                'Are you sure want to delete this category',
                                [
                                    {
                                    text: 'Cancel',
                                    onPress: () => console.log('Cancel Pressed'),
                                    style: 'cancel',
                                    },
                                    {text: 'OK', onPress: () => this.props.dispatch(deleteCategories(item.id))},
                                ],
                                {cancelable: false},
                        )
                        }} >
                        <ListItem noBorder >
                            <Left>
                            <Image source={require('../../assets/work.png')} style={{width:20, height:20, marginRight:20}} />
                                <Text style={{fontSize: 18}}>{item.name}</Text>
                            </Left>
                        </ListItem>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={item => item.id.toString()} />
            }

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
                            <TextInput placeholder="judul" style={{marginBottom:10, borderBottomWidth:2, borderBottomColor:'grey'}}
                            onChangeText={value => this.setState({name: value})} />
                            <TextInput placeholder="url" style={{marginBottom:10, borderBottomWidth:2, borderBottomColor:'grey'}}
                            onChangeText={value => this.setState({url: value})} />
                        </Form>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', padding:5}}>
                        <Button transparent onPress={() => {
                            this.AddCategory({name: this.state.name, url: this.state.url})
                            this.setState({modalVisible: false})
                            }}>
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

export default connect(state => ({categories: state.categories}))(DrawerCustom)