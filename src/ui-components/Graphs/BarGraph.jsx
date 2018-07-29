import React from "react";
//import PropTypes from 'prop-types';
import {YAxis,
        XAxis,
        Legend,
        Tooltip,
        BarChart,
        Bar} from 'recharts';

class BarGraph extends React.Component {
  constructor(props) {
    super(props);
    this.makeBars = this.makeBars.bind(this);
    this.palette = this.props.palette ?
      this.props.palette :
      ["#1A3177",
      "#12939A",
      "#FF9833",
      "#EF5D28",
      "#79C7E3",
      "#9631F5"]
  }

    // static propTypes = {
    //   data: PropTypes.object.isRequired,
    //   width: PropTypes.integer,
    // }

    // static defaultPropTypes = {
    //   height: 250,
    //   width: 900,
    // }

  makeBars() {
    let yAxis = this.props.yAxis;
    return <Bar type="monotone"
                dataKey={yAxis}
                fill={this.palette[0]}/>;
  }

  render() {
    let data = this.props.data;
    let height = this.props.height ? this.props.height : 250;
    let width = this.props.width ? this.props.width : 900;
    let divWidth = this.props.width ? this.props.width : '100%';
    let xAxis = this.props.xAxis;
    let yAxisLabel = this.props.yAxisLabel;
    let xAxisLabel = this.props.xAxisLabel;
    let legend = this.props.legend
      ? <Legend />
      : null;

    return (
      <div style={{height: height + 50,
        width: divWidth,
        float: "left"}}>

        {this.props.title ? <h3 align="center">{this.props.title}</h3> : null}


          <BarChart
            width={width}
            height={height}
            data={data}
            margin={{top: 10, right: 10, bottom: 100, left: 10}}
            style={{margin: '0 auto'}}
          >

            <XAxis dataKey={xAxis}
                   label={{value: xAxisLabel, angle: 0, position: "bottom"}}/>

            <YAxis label={{value: yAxisLabel, angle: -90, position: "insideLeft"}}/>

            <Tooltip/>
            {this.makeBars()}
            {legend}

          </BarChart>

        </div>
    );
  }
}

export {BarGraph};