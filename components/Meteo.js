import React from "react"
import { View, Text, StyleSheet, Button } from 'react-native'
import { withNavigation } from "react-navigation";
import style from '../style'



class Meteo extends React.Component {

    render() {

        const { data } = this.props.route.params
        return (

            <View style={style.container} >
                <Text style={style.titre}>
                    {"La météo de " + data.name}
                </Text>
                <Text style={style.results}>
                    {"température : " + data.main.temp + " °C"}
                </Text>
                <Text style={style.results}>
                    {"Ressenti : " + data.main.feels_like + " °C"}
                </Text>
                <Text style={style.results}>
                    {"Humidité : " + data.main.humidity + " %"}
                </Text>

            </View>
        )
    }
}


export default withNavigation(Meteo)