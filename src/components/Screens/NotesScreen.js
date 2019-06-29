import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Fab, Container, View, Icon, Input, List } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';
import CardList from '../CardList';
import MyHeader from '../MyHeader';
import axios from 'axios';

class NotesScreen extends Component {
    constructor(){
        super()
        this.state = {
            modalVisible: false,
            data: [],
            categories: []
        }
    }

    componentDidMount() {
        axios.get('http://192.168.43.10:3001/notes')
            .then(result => (
                this.setState({
                    data: result.data.values
                })
            ))
            .catch(err => {
                console.warn('cannot load data..')
            })
        
        axios.get('http://192.168.43.10:3001/categories')
            .then(result => (
                this.setState({
                    categories: result.data.values
                })
            ))
            .catch(err => {
                console.warn('cannot load data..')
            })
    }

    render() {
        return(
            <Container>
                <MyHeader navigation={this.props.navigation} page="Notes App" />
            <View style={{height: 70}}>
            <Input placeholder="cari note.." style={{
                    borderRadius: 50,
                    borderWidth: 0.3,
                    alignContent: 'center',
                    alignSelf: 'center',
                    width: '80%',
                    margin: 10,
                    paddingLeft: 12,
                    elevation: 1,
                    shadowOpacity: 0.2,
                    shadowRadius: 0.2
                }} />
            </View>
            <ScrollView>
                

                <View style={{ flex: 1, flexDirection: 'row', flexWrap: "wrap", justifyContent: "center"}}>
                        <FlatList
                            data={this.state.data}
                            renderItem={({ item }) => <CardList category={this.state.categories} notes={item} navigation={this.props.navigation} />}
                            keyExtractor={(item, index) => index}
                            numColumns={2}
                        />
                </View>
                </ScrollView>
                <Fab style={{ backgroundColor: "white" }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('AddNotes', this.state.categories)}>
                    <Icon name="add" style={{color: 'blue'}} />
                </Fab>
            </Container>
        )
    }
}

export default NotesScreen;