import React from "react";
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import { connect } from "react-redux";
import { toggleHamburger } from "../actions";
import HamburgerComponent from "./HamburgerComponent";
import LiveFeed from "./LiveFeed";

const SidebarComponent = (props) => {
  console.log(props.isOpen);
  return (
    <div style={{ zIndex: 10 }}>
      <Grid columns={1}>
        <Grid.Column>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              inverted
              onHide={() => props.toggleHamburger(false)}
              vertical
              visible={props.isOpen}
              width="thin"
            >
              <Menu.Item as="a">
                <Icon name="home" />
                Live Feed
              </Menu.Item>
              <Menu.Item as="a">
                <Icon name="gamepad" />
                Dashboard
              </Menu.Item>
              <Menu.Item as="a">
                <Icon name="camera" />
                Rate your Mood
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher dimmed={props.isOpen}>
              <Segment basic>
                <Grid columns={2}>
                  <Grid.Column width={1}>
                    <HamburgerComponent />
                  </Grid.Column>
                  <Grid.Column width={15}>
                    <LiveFeed />
                  </Grid.Column>
                </Grid>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.isOpen,
  };
};
export default connect(mapStateToProps, { toggleHamburger })(SidebarComponent);
