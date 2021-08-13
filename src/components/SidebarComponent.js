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
import HamburgerComponent from "./HamburgerComponent";

const SidebarComponent = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div>
    <Grid columns={2}>
      {/* <Grid.Column width={1} style={{zIndex:2}}>
        {/* <Checkbox
          checked={visible}
          label={{ children: <code>visible</code> }}
          onChange={(e, data) => setVisible(data.checked)}
        /> 
      </Grid.Column> */}

      <Grid.Column>
        <HamburgerComponent></HamburgerComponent>
        {/* <Checkbox
          checked={visible}
          label={{ children: <code>visible</code> }}
          onChange={(e, data) => setVisible(data.checked)}
        />  */}
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
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
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
    </div>
  );
};

export default SidebarComponent;
