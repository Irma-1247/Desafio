import { AppRegistry } from "react-native";
import React from "react";
import { ScrollView, View, FlatList, SafeAreaView, StyleSheet, Text, Image } from 'react-native'
import { Card, ListItem, withTheme } from 'react-native-elements'

const DATA = [
    {
        id: '1',
        title: 'Sol',
        src:require('./src/imgs/sol.jpg'),
        content: 'Se encuentra en el centro del sistema solar.'
    },
    {
        id: '2',
        title: 'Mercurio',
        src:require('./src/imgs/mercurio.jpg'),
        content: 'El más cercano al sol y el más pequeño.'
    },
    {
        id: '3',
        title: 'Venus',
        src:require('./src/imgs/venus.jpg'),
        content: 'Segundo planeta del sistema solar y el tercero en cuanto tamaño.'
    },
    {
        id: '4',
        title: 'Tierra',
        src:require('./src/imgs/tierra.jpg'),
        content: 'Tercer planeta del sistema solar, gira alrededor del sol en la tercera órbita más interna.'
    },
    {
        id: '5',
        title: 'Marte',
        src:require('./src/imgs/marte.jpg'),
        content: 'Cuarto planeta cercano al sol y el segundo más pequeño.'
    },
    {
        id:'6',
        title:'Jupiter',
        src:require('./src/imgs/jupiter.jpg'),
        content: 'Quinto planeta cercano al sol, y el más grande del sistema.'
    },
    {
        id:'7',
        title:'Saturno',
        src:require('./src/imgs/saturno.jpg'),
        content: 'Sexto planeta más cercano al sol y el único con anillos.'
    },
    {
        id:'8',
        title:'Neptuno',
        src:require('./src/imgs/neptuno.jpg'),
        content: 'Es el planeta más alejado de la tierra.'
    },
    {
        id:'9',
        title:'Alfa Centauri',
        src:require('./src/imgs/alfa.jpg'),
        content: 'Es la más brillante de la constelación de Centauro.'
    },
    {
        id:'10',
        title:'Estrella de Barnard',
        src:require('./src/imgs/estrella.jpg'),
        content: 'Se localiza en la constelación de Ofiuco y no puede ser observada.'
    },
    {
        id:'11',
        title:'Wolf 359',
        src:require('./src/imgs/wolf.jpg'),
        content: 'Se encuentra en la constelación de Leo y es totalmente invisible.'
    },
    {
        id:'12',
        title:'Lalande 21185',
        src:require('./src/imgs/lalande.jpg'),
        content: 'Se localiza en el rincón sureste de la constelación de la Osa Mayor.'
    }
];

//FlatList permite recorrer cada elemento del array y es pasado cada uno para imprimir
const App = () => {
    return(
        <ScrollView>
        <View style={styles.area}>
        <Card containerStyle={{backgroundColor:'#3A85A4',padding:10,margin:0}}>
        <Text style={styles.title}>Espacio</Text>
        </Card>
        <Card containerStyle={{padding:5,margin:0,backgroundColor:'#A8CEDA'}}>
        {
            DATA.map((u, i) => {
                return (
                    <React.Fragment key={i}>
                    <View style={styles.disp2}>
                    <Image
                    style={styles.img}
                    resizeMode="cover"
                    source={u.src}
                    />
                    <View style={styles.disp}>
                    <Text style={styles.subtitle}>{u.title}</Text>
                    <Text style={styles.content}>{u.content}</Text>
                    </View>
                    </View>
                    <Card.Divider style={styles.divi}/>
                    </React.Fragment>
                );
            })
        }
        </Card>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    area:{
        flex: 1
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom:4,
        marginTop:4,
        color: '#172140'
    },
    subtitle: {
        fontSize: 23,
        textAlign:'left',
        fontStyle:'italic'
    },
    content:{
        fontSize: 20,
        textAlign:'justify'
    },
    img:{
        width: 60,
        height: 60,
        margin: 5
    },
    disp:{
        flex:1,
        padding: 10
    },
    disp2:{
        flex:1,
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center'
    },
    divi:{
        backgroundColor:'black'
    }
});

AppRegistry.registerComponent("astronomia", () => App);