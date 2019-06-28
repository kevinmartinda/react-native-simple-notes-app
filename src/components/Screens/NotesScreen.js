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
            data: [
                {
                    "id": 47,
                    "title": "Sports International Checking Account",
                    "note": "District generate moderator utilize deposit payment integrate Personal Loan Account",
                    "categoryId": 1,
                    "createdAt": "2019-06-23T05:40:35.000Z",
                    "updatedAt": "2019-06-23T05:40:35.000Z",
                    "CategoryId": 1,
                    "Category": {
                        "id": 1,
                        "name": "Memo"
                    }
                },
                {
                    "id": 43,
                    "title": "content primary Samoa",
                    "note": "Fully-configurable transmit Granite New Jersey Cambridgeshire Books circuit Practical Steel Cheese",
                    "categoryId": 3,
                    "createdAt": "2019-06-23T05:40:35.000Z",
                    "updatedAt": "2019-06-23T05:40:35.000Z",
                    "CategoryId": 3,
                    "Category": {
                        "id": 3,
                        "name": "Todo"
                    }
                },
                {
                    "id": 41,
                    "title": "Alaska neural bypassing",
                    "note": "Ergonomic Cotton Bike National bandwidth Down-sized human-resource AGP Granite Chief",
                    "categoryId": 7,
                    "createdAt": "2019-06-23T05:40:35.000Z",
                    "updatedAt": "2019-06-23T05:40:35.000Z",
                    "CategoryId": 7,
                    "Category": {
                        "id": 7,
                        "name": "azure"
                    }
                },
                {
                    "id": 40,
                    "title": "Walks Refined Cotton Ball JBOD",
                    "note": "Incredible Granite Shirt Incredible Fresh Gloves maroon cultivate Gloves program azure Configurable",
                    "categoryId": 5,
                    "createdAt": "2019-06-23T05:40:35.000Z",
                    "updatedAt": "2019-06-23T05:40:35.000Z",
                    "CategoryId": 5,
                    "Category": {
                        "id": 5,
                        "name": "transmitter"
                    }
                },
                {
                    "id": 46,
                    "title": "Games bypass maximize",
                    "note": "wireless e-markets navigating Montana Tala visualize Berkshire Nebraska",
                    "categoryId": 2,
                    "createdAt": "2019-06-23T05:40:35.000Z",
                    "updatedAt": "2019-06-23T05:40:35.000Z",
                    "CategoryId": 2,
                    "Category": {
                        "id": 2,
                        "name": "Reminder"
                    }
                },
                {
                    "id": 45,
                    "title": "mint green Saint Lucia withdrawal",
                    "note": "Hong Kong Dollar impactful copy Agent Branding Operative blue Analyst",
                    "categoryId": 4,
                    "createdAt": "2019-06-23T05:40:35.000Z",
                    "updatedAt": "2019-06-23T05:40:35.000Z",
                    "CategoryId": 4,
                    "Category": {
                        "id": 4,
                        "name": "olive"
                    }
                },
                {
                    "id": 42,
                    "title": "out-of-the-box embrace synergistic",
                    "note": "Credit Card Account Credit Card Account synergistic Auto Loan Account Gorgeous Swedish Krona Auto Loan Account override",
                    "categoryId": 7,
                    "createdAt": "2019-06-23T05:40:35.000Z",
                    "updatedAt": "2019-06-23T05:40:35.000Z",
                    "CategoryId": 7,
                    "Category": {
                        "id": 7,
                        "name": "azure"
                    }
                },
                {
                    "id": 39,
                    "title": "encryption Handcrafted driver",
                    "note": "Handcrafted Wooden Towels Light Awesome card magenta dynamic 24/365 Streets",
                    "categoryId": 2,
                    "createdAt": "2019-06-23T05:40:35.000Z",
                    "updatedAt": "2019-06-23T05:40:35.000Z",
                    "CategoryId": 2,
                    "Category": {
                        "id": 2,
                        "name": "Reminder"
                    }
                },
                {
                    "id": 38,
                    "title": "invoice web-enabled support",
                    "note": "Investment Account Avon Buckinghamshire Indiana Practical optimizing Organized input",
                    "categoryId": 8,
                    "createdAt": "2019-06-23T05:40:35.000Z",
                    "updatedAt": "2019-06-23T05:40:35.000Z",
                    "CategoryId": 8,
                    "Category": {
                        "id": 8,
                        "name": "Tanzanian Shilling"
                    }
                },
                {
                    "id": 72,
                    "title": "Unbranded Auto Loan Account Response",
                    "note": "Product Intranet Rial Omani Robust Baby Checking Account Kwanza 5th generation",
                    "categoryId": 2,
                    "createdAt": "2019-06-23T05:40:35.000Z",
                    "updatedAt": "2019-06-23T05:40:35.000Z",
                    "CategoryId": 2,
                    "Category": {
                        "id": 2,
                        "name": "Reminder"
                    }
                }
            ],
            categories: [
                {
                    "id": 1,
                    "name": "Memo",
                    "createdAt": "2019-06-21T07:38:12.000Z",
                    "updatedAt": "2019-06-21T07:38:12.000Z"
                },
                {
                    "id": 2,
                    "name": "Reminder",
                    "createdAt": "2019-06-21T07:38:55.000Z",
                    "updatedAt": "2019-06-21T07:38:55.000Z"
                },
                {
                    "id": 3,
                    "name": "Todo",
                    "createdAt": "2019-06-21T07:39:06.000Z",
                    "updatedAt": "2019-06-21T07:39:06.000Z"
                },
                {
                    "id": 4,
                    "name": "olive",
                    "createdAt": null,
                    "updatedAt": null
                },
                {
                    "id": 5,
                    "name": "transmitter",
                    "createdAt": null,
                    "updatedAt": null
                },
                {
                    "id": 6,
                    "name": "Tunisia",
                    "createdAt": null,
                    "updatedAt": null
                },
                {
                    "id": 7,
                    "name": "azure",
                    "createdAt": null,
                    "updatedAt": null
                },
                {
                    "id": 8,
                    "name": "Tanzanian Shilling",
                    "createdAt": null,
                    "updatedAt": null
                }
            ]
        }
    }

    addNotes(param) {
        const b = [...this.state.data, param]
        this.setState({data: b})
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
                    width: 240,
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