import React from "react";
import { LineChart,
         Line,
         XAxis,
         YAxis,
         CartesianGrid,
         Legend,
         Tooltip} from 'recharts';

class LineGraph extends React.Component {
    constructor(props) {
        super(props);
        this.palette = this.props.palette ?
        this.props.palette :
        ["#1A3177",
        "#12939A",
        "#FF9833",
        "#EF5D28",
        "#79C7E3",
        "#9631F5"]
    }


    render() {
        let data = this.props.data;
        let height = this.props.height ? this.props.height : 250;
        let width = this.props.width ? this.props.width : 900;
        let divWidth = this.props.width ? this.props.width : '100%';
        let xAxis = this.props.xAxis;
        let yAxisLabel = this.props.yAxisLabel;
        let xAxisLabel = this.props.xAxisLabel;
        // //let legend = this.props.legend
        //   ? <Legend />
        //   : null;

        return (
            <div style={{height: height + 50,
                width: divWidth,
                float: "left",
                backgroundColor: "cornsilk"}}>

                {this.props.title ? <h3 align="center">{this.props.title}</h3> : null}

                <LineChart
                    width = {width}
                    height = {height}
                    data = {data}
                    margin={{top: 10, right: 10, bottom: 100, left: 10}}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="car" stroke="#8884d8" />
                    <Line type="monotone" dataKey="phone" stroke="#82ca9d" />
                    <XAxis dataKey={xAxis}
                        label={{value: xAxisLabel, angle: 0, position: "bottom"}}/>
                    <YAxis label={{value: yAxisLabel, angle: -90, position: "insideLeft"}}/>
                    <Tooltip/>
                    <Legend/>
                </LineChart>
            </div>
        );
    }
}
export {LineGraph};