import React,{useState} from 'react';
import { View,Text,StyleSheet,SafeAreaView } from 'react-native';

import Mytext from './components/Mytext';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import Mylinechart from './components/Mylinechart';
import Mybarchart from './components/Mybarchart';
import Mypiechart from './components/Mypiechart';

const Charts = ({navigation}) => {

    const [line,setLine] = useState(true);
    const [pie,setPie] = useState(false);
    const [bar,setBar] = useState(false);

    const handleLine = () => {
        setLine(true);
        setPie(false);
        setBar(false);
    };

    const handlePie = () => {
        setLine(false);
        setBar(false);
        setPie(true);
    };

    const handleBar = () => {
        setLine(false);
        setBar(true);
        setPie(false);
    };

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'white'}}>
                <View style={{
                    
                    flexDirection:'row',
                    justifyContent:'space-around'}}>
                    <Mybutton
                        title="Line Chart"
                        customClick={handleLine}
                    />
                    <Mybutton
                        title="Pie Chart"
                        customClick={handlePie}
                    />
                    <Mybutton
                        title="Bar Chart"
                        customClick={handleBar}
                    />
                </View>
                {line?<Mylinechart/>:null}
                {pie?<Mypiechart/>:null}
                {bar?<Mybarchart/>:null}
            </View>
        </SafeAreaView>
    );

};

export default Charts;