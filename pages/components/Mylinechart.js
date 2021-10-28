import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions,View } from "react-native";
const screenWidth = Dimensions.get("window").width;
import Mybutton from './Mybutton';

const Mylinechart = () => {

    const data = {
        labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu","Fri"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43,45],
            color: ()=>'black', // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["Expense of a Week"] // optional
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
            <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                style={{
                    flex:1,
                    marginTop:20,
                }}
            />
        </View>
    );

};

export default Mylinechart;

//(opacity = 1) => `rgba(134, 65, 244, ${opacity})`