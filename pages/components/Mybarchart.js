import React from 'react';
import { View,Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

const Mybarchart = () => {

    const data = {
        labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu","Fri"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43,47]
          }
        ]
    };

    const chartConfig = {
        backgroundGradientFrom: "white",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "white",
        backgroundGradientToOpacity: 0.5,
        color: ()=>'black',
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    return (
        <View>
            <BarChart
                style={{
                    flex:1,
                    marginTop:20,
                }}
                data={data}
                width={screenWidth}
                height={220}
                yAxisLabel="$"
                chartConfig={chartConfig}
                verticalLabelRotation={30}
            />
        </View>
    );

};

export default Mybarchart;