import React from "react";
import HamburgerComponent from "./HamburgerComponent";
// import { Feed } from 'semantic-ui-react';
import { Card, Icon } from 'semantic-ui-react'

// const LiveFeed = () => {
//   const [isOpen, setOpen] = useState(false);

//   return (
//     <div>
//       <HamburgerComponent toggled={isOpen} toggle={setOpen} />
//       <h1>Live Feed</h1>
      
//     </div>
//   );
// };

// Get from the database
const description = [
  'Gaurav is a Grad with 1 month experience in the banking industry.',
  'He enjoys the outdoors and currently resides in Mumbai.',
  'He enjoys the outdoors and currently resides in Mumbai.',
  'He enjoys the outdoors and currently resides in Mumbai.',
  'He enjoys the outdoors and currently resides in Mumbai.',
  'He enjoys the outdoors and currently resides in Mumbai.'
].join(' ')

const LiveFeed = () => (
  <div>
  <h1>Live Feed</h1>
  <Card style={{display: "inline"}}>
    <Card.Content header='Gaurav Sawant' />
    <Card.Content description={description} />
    <Card.Content extra>
      <Icon name='user' />Rating 9
    </Card.Content>
  </Card>
  <Card style={{display: "inline"}}>
    <Card.Content header='Gaurav Sawant' />
    <Card.Content description={description} />
    <Card.Content extra>
      <Icon name='user' />Rating 9
    </Card.Content>
  </Card>
  </div>
)

export default LiveFeed;