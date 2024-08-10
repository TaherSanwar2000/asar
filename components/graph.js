import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {LineChart, BarChart, YAxis, XAxis} from 'react-native-svg-charts';
import {Line, G, Circle} from 'react-native-svg';
import * as shape from 'd3-shape';
const Graph = () => {
  const lineData = [30, 50, 72, 70, 60, 50, 80, 65, 60, 67];

  // Ensure the barData aligns with the range set by yMin and yMax
  const barData = [0, 0, 0, 0, 2, 1, 3, 1.5, 2.5, 1.5];

  const contentInset = {top: 20, bottom: 20};

  const VerticalLine = ({x, y, index}) => (
    <Line
      key={'vertical-line'}
      x1={x(index)}
      x2={x(index)}
      y1={y(0)}
      y2={y(100)}
      stroke={'black'}
      strokeDasharray={[4, 4]}
    />
  );
  const HorizontalLine = ({x, y, index}) => (
    <Line
      key={'horizontal-line'}
      x1={x(0)}
      x2={x(100)}
      y1={y(index)}
      y2={y(index)}
      stroke={'black'}
      strokeDasharray={[4, 4]}
    />
  );
  const Annotations = ({x, y}) => (
    <G>
      <VerticalLine x={x} y={y} index={2} />
      <HorizontalLine x={x} y={y} index={lineData[2]} />
      
      <Circle cx={x(2)} cy={y(lineData[2])} r={4} fill={'black'} />
      <Text
        x={x(2) - 20}
        y={y(lineData[2]) - 10}
        fill={'black'}
        fontSize={12}
        fontWeight={'bold'}>
        09:21
      </Text>
      
      <Text
        x={x(lineData.length - 1) - 20}
        y={y(lineData[lineData.length - 1]) - 10}
        fill={'black'}
        fontSize={12}
        fontWeight={'bold'}>
        30.0%
      </Text>
    </G>
  );
  
  

  const CustomGrid = ({x, y, ticks}) => (
    <G>
      {/* Draw vertical lines */}
      {ticks.map((tick, index) => (
        <Line
          key={index}
          x1={x(index)}
          x2={x(index)}
          y1={'0%'}
          y2={'100%'}
          stroke={'rgba(0,0,0,0.2)'}
        />
      ))}
      {/* Draw horizontal lines */}
      {ticks.map((tick, index) => (
        <Line
          key={index}
          x1={'0%'}
          x2={'100%'}
          y1={y(tick)}
          y2={y(tick)}
          stroke={'rgba(0,0,0,0.2)'}
        />
      ))}
    </G>
  );

  return (
    <View style={{padding: 20, backgroundColor: '#fff'}}>
        
      <View style={{height: 200, flexDirection: 'row', right: 10}}>
        {/* Left Y-Axis for Line Chart */}
        <YAxis
          data={lineData}
          contentInset={contentInset}
          svg={{fontSize: 10, fill: 'black'}}
          numberOfTicks={6}
          formatLabel={value => `${value}%`}
        />
        <View style={{flex: 1, marginLeft: 10}}>
          {/* Bar Chart with Alternating Colors */}
          <BarChart
            style={[
              StyleSheet.absoluteFill,
              {backgroundColor: 'rgba(255,255,255,1)'},
            ]} // Temporary background color for debugging
            data={barData}
            yMin={0}
            yMax={5} // Ensure this aligns with your data values
            contentInset={contentInset}
            svg={{fill: 'orange'}}
          />

          {/* Line Chart */}
          <LineChart
            style={{flex: 1}}
            data={lineData}
            svg={{stroke: 'blue', strokeWidth: 4}}
            contentInset={contentInset}
            curve={shape.curveLinear}>
            <CustomGrid />
            <Annotations />
          </LineChart>

          {/* Shared X-Axis */}
          <XAxis
            data={lineData}
            formatLabel={(value, index) => index}
            contentInset={{left: 10, right: 10}}
            svg={{fontSize: 10, fill: 'black'}}
          />
        </View>
      </View>
      {/* Right Y-Axis for Bar Chart */}
      <YAxis
        style={{position: 'absolute', right: 6, top: 80, bottom: 20}}
        data={barData.map(item => item)}
        yMin={0}
        yMax={3} // Adjust this based on your bar data values
        contentInset={contentInset}
        svg={{fontSize: 10, fill: 'black'}}
        numberOfTicks={6}
        formatLabel={value => `${value}`}
      />
    </View>
  );
};

export default Graph;
