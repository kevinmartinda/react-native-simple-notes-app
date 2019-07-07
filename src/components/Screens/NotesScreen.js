import React, { Component } from 'react';
import { FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { Fab, Container, View, Icon, Input } from 'native-base'
import CardList from '../CardList';
import MyHeader from '../MyHeader';
import axios from 'axios';
import _ from 'lodash'

import { connect } from 'react-redux'

import { getNotes, getSearchedNotes, incPage, getMoreData, getSort, setSearch } from '../../public/redux/action/notes'
import { getCategories } from '../../public/redux/action/categories'

class NotesScreen extends Component {
    constructor(){
        super()
        this.state = {
            modalVisible: false,
            seacrh: '',
            page: 1,
            onEndReachedCalledDuringMomentum: false
        }
    }

    componentDidMount() {
        this.fetchCategories()
        this.fetchNotes()
    }

    _onRefresh = async () => {
        await this.setState({page: 1})
        await this.setState({refreshing: true})
        await this.fetchNotes()
        await this.setState({refreshing: false})
      }

    fetchSearchedNote = async (keyword) => {
        try {
            await this.props.dispatch(setSearch(keyword))
            console.log(keyword)
            await this.props.dispatch(getSearchedNotes(this.props.notes.search))   
        } catch (error) {
            console.log(error)
        }
    }

    fetchNotes = async () => {
        try {
            await this.props.dispatch(getNotes())   
        } catch (error) {
            console.log(error)
        }
    }

    fetchCategories = () => {
        this.props.dispatch(getCategories())
    }

    handleLoadMore = async () => {
        if(this.state.page < this.props.notes.page && this.props.notes.pageName === 'Home') {
            await this.setState({isLoading: true})
            await this.setState({page: this.state.page + 1}, 
                () => this.props.dispatch(getMoreData(this.state.page)))
        } else {
            await this.setState({isLoading: false})
            console.log('end of data')
        }
    }

    render() {
        return(
            <Container>
                <MyHeader navigation={this.props.navigation} page="Notes App" />
            <View style={{height: 70}}>
            <Input placeholder="Search note.." style={{
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
                }}
                onChangeText={_.debounce(this.fetchSearchedNote, 1000)} />
            </View>

                <View style={{ flex: 1, flexDirection: 'row', flexWrap: "wrap", justifyContent: "center"}}>
                        {this.props.notes.isLoading || this.props.categories.isLoading || this.props.categories.isDeleted ? <ActivityIndicator size="large" color="#0000ff" /> : (<FlatList
                            data={this.props.notes.data}
                            renderItem={({ item }) => <CardList category={this.props.categories.data} note={item} navigation={this.props.navigation} />}
                            keyExtractor={(item, index) => index.toString()}
                            numColumns={2}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={this._onRefresh}
                                />}
                            onEndReached={this.handleLoadMore}
                            onEndReachedThreshold="0.1"
                            ListFooterComponent={() => this.state.isLoading ? (<ActivityIndicator size="small" color="#0000ff" />) : null}
                        />)}
                </View>
                <Fab style={{ backgroundColor: "white" }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('AddNotes', {categories:this.state.categories})}>
                    <Icon name="add" style={{color: 'blue'}} />
                </Fab>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories,
        notes: state.notes
    }
}

export default connect(mapStateToProps)(NotesScreen)