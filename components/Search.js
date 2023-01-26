import React from 'react'
import { Text, View, TextInput, Button } from "react-native"
import style from '../style'
import { withNavigation } from 'react-navigation';
import axios from 'axios'



class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            city: '',
            data: { main: { temp: 0 } }
        }
        this.search = ""
    }

    _searchTextInputChanged(text) {

        this.search = text // Modification du texte recherché à chaque saisie de texte, sans passer par setState
    }


    submit() {
        this.setState({ city: this.search })
        this.fetchweather(this.search)
    }

    async fetchweather(city) {
        let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=a6f8939ab215ab10c940d4a525dd91c0'
        let response = await axios.get(url)
        this.setState({ data: response.data });
        this.props.navigation.navigate('Meteo', { data: response.data })
    }


    render() {
        return (
            <View style={style.container}>
                <TextInput
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                    style={style.input}

                />
                <Button color={style.color} onPress={() => this.submit()} title="Rechercher" />
            </View>

        )
    }
}


export default withNavigation(Search)