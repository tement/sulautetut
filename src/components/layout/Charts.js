import React from "react";
import { VictoryChart, VictoryTooltip, VictoryGroup, VictoryLine, VictoryScatter, VictoryAxis, VictoryVoronoiContainer } from "victory";

function Charts( {chart1, chart2} ) {
  return(
    <div>
      <h3>Lämpötila (°C)</h3>
      <VictoryChart
        domainPadding={{x: 30, y:10}}
        width={1000}
        height={250}
        containerComponent={
          <VictoryVoronoiContainer/>
        }
      >
        <VictoryGroup data={chart1}>
          <VictoryLine
            style={{
              data:
                {stroke: "red", strokeWidth: 1}
            }}
          />
          <VictoryScatter
            style={{ data: {fill: "red"}}}
            size={2}
            labels={({ datum }) => `${datum.y} °C`}
            labelComponent={<VictoryTooltip/>}
          />
        </VictoryGroup>
      </VictoryChart>

      <h3>Ilmankosteus (%)</h3>
      <VictoryChart
        domainPadding={{x: 30, y: 10}}
        width={1000}
        height={250}
        containerComponent={
          <VictoryVoronoiContainer/>
        }
      >
        <VictoryGroup data={chart2}>
          <VictoryLine
            style={{
              data:
                {stroke: "blue", strokeWidth: 1}
            }}
          />
          <VictoryScatter
            style={{ data: {fill: "blue"}}}
            size={2}
            labels={({ datum }) => `${datum.y} %`}
            labelComponent={<VictoryTooltip/>}
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  )
}

export default Charts;
