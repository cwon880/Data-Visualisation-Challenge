import React from "react";
import { LineChart,
         Line,
         XAxis,
         YAxis,
         CartesianGrid,
         Legend,
         Tooltip} from 'recharts';


                                            //LineGraph class acts as wrapper for a LineChart,
class LineGraph extends React.Component {   //similar to BarGraph.jsx provided, a lot of code is copy pasted from that file
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
        let height = this.props.height ? this.props.height : 500;
        let width = this.props.width ? this.props.width : 1200;
        let divWidth = this.props.width ? this.props.width : '100%';
        let xAxis = this.props.xAxis;
        let yAxisLabel = this.props.yAxisLabel;
        let xAxisLabel = this.props.xAxisLabel;

        return (
            <div style={{height: height + 50,
                width: divWidth,
                float: "left",
                backgroundColor: "azure"}}>

                {this.props.title ? <h3 align="center">{this.props.title}</h3> : null}

                <LineChart
                    width = {width}
                    height = {height}
                    data = {data}
                    margin={{top: 20, right: 50, bottom: 100, left: 20}}
                >
                    <CartesianGrid strokeDasharray="6 6" />
                    <Line type="monotone" dataKey="car" stroke="#8884d8" />
                    <Line type="monotone" dataKey="phone" stroke="#82ca9d" />
                    <XAxis dataKey={xAxis}
                        label={{value: xAxisLabel, angle: 0, position: "bottom"}}/>
                    <YAxis label={{value: yAxisLabel, angle: -90, position: "insideLeft"}}/>
                    <Tooltip/>
                    <Legend align = "right"/>
                </LineChart>
            </div>
        );
    }
}
export {LineGraph};