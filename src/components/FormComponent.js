import React from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const handle = (smileys, stopPoints) => {
    return props => {
      const style = {
          left: `${props.offset}%`
      };
      let index = stopPoints.findIndex(threshold => props.value < threshold);
      const smiley =
          smileys[index];

      return (
          <div style={style} className="smiley-handle">
              {smiley}
              <label style={{fontSize: "20px", marginLeft: "10px"}}>{index + 1}</label>
          </div>
      );
   }
};

class SmileySlider extends React.PureComponent {
    render() {
        const sliderHandle = handle(this.props.smileys, this.props.stopPoints);
        return (
            <Slider
              min={this.props.minValue}
              max={this.props.maxValue}
              defaultValue={this.props.defaultVal}
              handle={sliderHandle}
              step={this.props.step || 1}
              onAfterChange={this.props.handleChange}
             />
        );
    }
}

class Sliders extends React.PureComponent {
  render() {
    return (
      <div className="text-center">
       <SmileySlider
         smileys={[
            String.fromCodePoint(128542),
            String.fromCodePoint(128542),
            String.fromCodePoint(128528),
            String.fromCodePoint(128528),
            String.fromCodePoint(128578),
            String.fromCodePoint(128578),
            String.fromCodePoint(128515),
            String.fromCodePoint(128515),
            String.fromCodePoint(128525),
            String.fromCodePoint(128525)
          ]}
         stopPoints={[
           2, 3, 4, 5, 6, 7, 8, 9, 10, 11
         ]}
         minValue={1}
         maxValue={10}
         defaultVal={1}
        />
        
      </div>
    );
  }
}

function FormComponent() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Rate your Mood</Button>}
    >
      <Modal.Header>Submit your Mood Rating</Modal.Header>
      <Form>
      <Form.Field style={{width: "90%", margin: "10px auto"}}>
        <label style={{fontFamily: "Verdana"}}>Rate</label>
        <Sliders></Sliders>
        </Form.Field>
        <Form.Field style={{width: "90%", margin: "15px auto"}}>
        <label style={{fontFamily: "Verdana"}}>Name</label>
        <input placeholder='Name'/>
        </Form.Field>
        <Form.Field style={{width: "90%", margin: "15px auto"}}>
        <label style={{fontFamily: "Verdana"}}>Email ID</label>
        <input placeholder='Email ID' />
        </Form.Field>
        <Form.Field style={{width: "90%", margin: "15px auto"}}>
            <label style={{fontFamily: "Verdana"}}>Rating Justification</label>
            <textarea placeholder='Justify your Rating' />
        </Form.Field>
        <Form.Field style={{width: "90%", margin: "15px auto"}}>
            <label style={{fontFamily: "Verdana"}}>Hashtags</label>
            <input placeholder='Enter some hashtags' />
            <br />
        </Form.Field>
        </Form>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Submit"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default FormComponent;