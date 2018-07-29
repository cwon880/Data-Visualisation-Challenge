import React from "react";
import Card from "@material-ui/core/Card";


import CardContent from "@material-ui/core/CardContent";
//import Typography from "@material-ui/core/Typography";
import {withRouter} from "react-router";
import {formattedSales} from "../data";
import {LineGraph} from "../ui-components/Graphs/LineGraph";

class EducationPageRouter extends React.Component{

  render() {
    return (
    <Card>
      <CardContent>Graph Example</CardContent>
      <LineGraph title="Location of cars in the last Month"
                xAxis='date'
                yAxis='car'
                yAxisLabel = "Number"
                xAxisLabel = "Country"
                data={formattedSales} />
    </Card>
    )
  }
}

// const EducationPageRouter = (classes, theme) => (

//     <Card className={classes.root}>
//       <CardContent>
//         <Typography variant="display1">Line Graph Displaying Sales Info</Typography>
//       </CardContent>
//     </Card>
// );

const EducationPage = withRouter(EducationPageRouter);


export default (EducationPage);