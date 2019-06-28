import React, { Component } from 'react';
import { FlatList, Image, Modal, TouchableOpacity} from 'react-native';
import { Fab, Container, View, Icon, Input, Button, Thumbnail, Card, CardItem, Text, List, Picker, ListItem } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';
import CardList from '../CardList';

var self;
class NotesScreen extends Component {
    constructor(){
        super()
        self = this
        this.state = {
            modalVisible: false,
            data: [{
                id: 1,
                title: 'Hey, Note!',
                note: 'Lorem ipsum dolor sit amet',
                category: {
                    id: 1,
                    name: 'memo'
                },
                time: '12-12-12'
            },{
                id: 2,
                title: 'Hey, Note!',
                note: 'Lorem ipsum dolor sit amet',
                category: {
                    id: 1,
                    name: 'memo'
                },
                time: '12-12-12'
            },{
                id: 3,
                title: 'Hey, Note!',
                note: 'Lorem ipsum dolor sit amet',
                category: {
                    id: 3,
                    name: 'todo'
                },
                time: '12-12-12'
            },{
                id: 4,
                title: 'Hey, Note!',
                note: 'Lorem ipsum dolor sit amet',
                category: {
                    id: 1,
                    name: 'category'
                },
                time: '12-12-12'
            },{
                id: 5,
                title: 'Hey, Note!',
                note: 'Lorem ipsum dolor sit amet',
                category: {
                    id: 1,
                    name: 'memo'
                },
                time: '12-12-12'
            },{
                id: 6,
                title: 'Hey, Note!',
                note: 'Lorem ipsum dolor sit amet',
                category: {
                    id: 2,
                    name: 'reminder'
                },
                time: '12-12-12'
            },{
                id: 7,
                title: 'Hey, Note!',
                note: 'Lorem ipsum dolor sit amet',
                category: {
                    id: 2,
                    name: 'reminder'
                },
                time: '12-12-12'
            }]
        }
    }

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
      }

    static navigationOptions = ({navigation}) => ({
        headerTitle: 'Notes App',
        headerTitleStyle: {
            textAlign: 'center',
            flexGrow: 1,
            alignSelf: 'center'
        },
        headerLeft: (
            <Button transparent 
                onPress={() => navigation.openDrawer()}>
            <Thumbnail
                source={require('../../../assets/logo.jpeg')}
                style={{ width: 45, height: 45, marginLeft: 10, marginTop:10 }}
            />
            </Button>
        ),headerRight: (
            <TouchableOpacity transparet
                onPress={() => {
                  self.setVisible(true)
                }}>
                <Image source={require('../../../assets/desc.png')} style={{width: 20, height: 20, marginRight: 10}} />
            </TouchableOpacity>
        )
    })
    
    setVisible(visibel){
        this.setState({modalVisible: visibel})
    }

    render() {
        return(
            <Container>
            <View>
            <Modal
            animationType="fade"
            animated={true}
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
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
                        <Text>Ascrnding</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Ascrnding</Text>
                    </ListItem>
                    <ListItem>
                <TouchableOpacity
                    onPress={() => {
                    this.setVisible(!this.state.modalVisible);
                    }}>
                    <Text>Hide Modal</Text>
                </TouchableOpacity>
                </ListItem>
                </List>
                </View>
            </View>
            </Modal>
            </View>
            <ScrollView>
                <Input placeholder="cari note.." style={{
                    borderRadius: 50,
                    borderWidth: 0.3,
                    alignContent: 'center',
                    alignSelf: 'center',
                    width: 240,
                    margin: 10,
                    paddingLeft: 12,
                    shadowColor: 'red',
                    elevation: 1,
                    shadowOpacity: 0.2,
                    shadowRadius: 0.2
                }} />

                <View style={{ flex: 1, flexDirection: 'row', flexWrap: "wrap", justifyContent: "center"  }}>
                    <List>
                        <FlatList
                            data={this.state.data}
                            renderItem={({ item }) => <CardList note={item} navigation={this.props.navigation} />}
                            numColumns={2}
                            keyExtractor={item => item.id}
                        />
                    </List>
                </View>
                </ScrollView>
                <Fab style={{ backgroundColor: "white" }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('AddNotes')}>
                    <Icon name="add" style={{color: 'blue'}} />
                </Fab>
            </Container>
        )
    }
}

export default NotesScreen;

https://github.com/react-navigation/react-navigation/issues/1789

import React, { Component } from 'react';
import { Card, CardItem, Body, Text } from 'native-base';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

class CardList extends Component {
    render() {
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate('EditNotes', {data: this.props.notes, category: this.props.category})}>
                <Card style={{
                    flex:1,
                    flexGrow:1,
                    backgroundColor: color[this.props.notes.Category.id - 1],
                    width: 150, //CHANGE THIS INTO PERCENTAGE!!!!
                    height: 180,
                    padding: 10
                }}>
                <Text style={{fontSize: 6}}>
                    {this.props.notes.updatedAt}
                </Text>
                    
                       <Text style={{fontSize: 14}}>
                       {this.props.notes.title}
                       </Text>
                    <Body style={{
                        padding:5,
                    }}>
                        <Text style={{color: 'grey', fontSize: 8, textAlign: 'right', alignSelf: 'flex-end'}}>
                            {this.props.notes.Category.name}
                        </Text>
                        <Text numberOfLines={5} style={{color: 'white', fontSize: 12}}>
                            {this.props.notes.note}
                        </Text>
                    </Body>
                </Card>
                
                </TouchableOpacity>
            )
    }
}

export default CardList;

const color = ['#2FC2DF', '#C0EB6A', '#FAD06C', '#FF92A9', '#F4F2B0', '#F91023', '#2114E1', '#32E903']