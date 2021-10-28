import React from 'react';
import { View,Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

const Mypiechart = () => {

    const data = [
        {
          name: "Sat",
          population: 20,
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Sun",
          population: 45,
          color: "#F00",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Mon",
          population: 28,
          color: "red",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Tue",
          population: 80,
          color: "black",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Wed",
          population: 99,
          color: "rgb(0, 0, 255)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
            name:"Thu",
            population: 43,
            color: "#3632a8",
            legendFontColor:"#7F7F7F",
            legendFontSize:15
        },
        {
            name:"Fri",
            population: 47,
            color: "#18ada1",
            legendFontColor:"#7F7F7F",
            legendFontSize:15
        },
    ];

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    return (

        <PieChart
            style={{
                flex:1,
                marginTop:20,
                backgroundColor:'white',
            }}
            data={data}
            width={screenWidth}
            height={300}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            center={[10, 30]}
            absolute
        />

    );

};

export default Mypiechart;