import React from "react";
import Card from "@material-ui/core/Card";


import CardContent from "@material-ui/core/CardContent";
import {withRouter} from "react-router";
import {JSONresponeSales} from "../data";
import {LineGraph} from "../ui-components/Graphs/LineGraph";
import { dataFormatter } from "../dataFormatter";

class EducationPageRouter extends React.Component{

  //this class is similar to the ExperiencePageRouter class
  render() {
    return (
    <Card>
      <CardContent>Line Graph Displaying Sales Info</CardContent>
      <LineGraph title="Car and Phone sales over the previous month"
                xAxis='date'
                yAxis='car'
                yAxisLabel = "Number of sales"
                xAxisLabel = "Date"
                data= {dataFormatter(JSONresponeSales)} />
    </Card>
    )
  }
}

const EducationPage = withRouter(EducationPageRouter);


export default (EducationPage);