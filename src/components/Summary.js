import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import { Icon, Label, Menu } from "semantic-ui-react";
const colors = [
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "violet",
  "purple",
  "pink",
  "brown",
];
function getColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

const pieOptions = {
  title: "",
  slices: [
    {
      color: "#2BB673",
    },
    {
      color: "#d91e48",
    },
    {
      color: "#007fad",
    },
    {
      color: "#e9a227",
    },
  ],
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "233238",
      fontSize: 14,
    },
  },
  tooltip: {
    showColorCode: true,
  },
  chartArea: {
    left: 0,
    top: 0,
    width: "100%",
    height: "80%",
  },
  fontName: "Roboto",
};
class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [[]],
    };
  }
  async helper() {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    date = "2021-08-15";
    const result = await axios.get(
      `http://localhost:8080/getCountByRatingGroup/${date}`
    );
    let charData = [["call", "no"]];
    for (let column of result.data) {
      charData.push([column.rating, column.numPeople]);
    }
    this.setState({ columns: charData });
  }
  componentDidMount() {
    this.helper();
  }
  state = {
    chartImageURI: "",
  };
  render() {
    return (
      <div className="App">
        <h1>Mood Summary of the Day!!</h1>
        <Chart
          chartType="PieChart"
          data={this.state.columns}
          options={pieOptions}
          graph_id="PieChart"
          width={"100%"}
          height={"400px"}
          legend_toggle
        />
        <h1>Trending Hashtags</h1>
        <Menu compact>
          {colors.map((eachcolor) => {
            return (
              <Menu.Item as="a" size="big">
                <Icon name="hashtag" /> {eachcolor}
                <Label color={getColor()} floating>
                  22
                </Label>
              </Menu.Item>
            );
          })}
        </Menu>
      </div>
    );
  }
}

export default Summary;
