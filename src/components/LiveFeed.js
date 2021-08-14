import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Card, Icon } from "semantic-ui-react";
import { fetchLiveFeed } from "../actions";

const displayLiveFeed = (data) => {
  console.log(data[0]);
  if (data[0] != undefined) {
    console.log(11);
    return data[0].forEach((eachData) => {
      return (
        <Card style={{ display: "inline" }} key={eachData.id}>
          <Card.Content header={eachData.name} />
          <Card.Content description={eachData.moodJustification} />
          <Card.Content extra>
            <Icon name="user" />
            {eachData.rating}
          </Card.Content>
        </Card>
      );
    });
  } else {
    return null;
  }
};

const LiveFeed = (props) => {
  useEffect(() => {
    props.fetchLiveFeed();
  }, []);
  return (
    <div>
      <h1 style={{ paddingLeft: "15px" }}>Live Feed</h1>
      {props.liveFeedData[0] !== undefined
        ? props.liveFeedData[0].map((eachData) => {
            return (
              <Card style={{ display: "inline" }} key={eachData.id}>
                <Card.Content header={eachData.name} />
                <Card.Content description={eachData.moodJustification} />
                <Card.Content extra>
                  <Icon name="user" />
                  {eachData.rating}
                </Card.Content>
              </Card>
            );
          })
        : null}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { liveFeedData: state.liveFeedData };
};
export default connect(mapStateToProps, { fetchLiveFeed })(LiveFeed);
