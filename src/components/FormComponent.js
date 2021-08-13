import React from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Slider from '@material-ui/core/Slider';

const Slider = window['rc-slider'];

const handle = (smileys, stopPoints) => {
    return props => {
      const style = {
          left: `${props.offset}%`
      };

      const smiley =
          smileys[stopPoints.findIndex(threshold => props.value < threshold)];

      return (
          <div style={style} className="smiley-handle">
              {smiley}
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
              defaultValue={this.props.minValue}
              handle={sliderHandle}
              step={this.props.step || 1}
              onAfterChange={this.props.handleChange}
             />
        );
    }
}

class Sliders extends React.PureComponent {
  render() {
    // Ensure last stop point is > maxValue
    // Find codepoints with codePointAt() https://medium.com/reactnative/emojis-in-javascript-f693d0eb79fb
    return (
      <div className="text-center">
       <SmileySlider
         smileys={[
            String.fromCodePoint(128528),
            String.fromCodePoint(128578),
            String.fromCodePoint(128515),
            String.fromCodePoint(128525)
          ]}
         stopPoints={[
           2, 3, 4, 5
         ]}
         minValue={1}
         maxValue={4}
        />
        
      </div>
    );
  }
}


// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: 300,
//   },
//   margin: {
//     height: theme.spacing(3),
//   },
// }));

// const marks = [
//   {
//     value: 1,
//     label: '1',
//   },
//   {
//     value: 2,
//     label: '2',
//   },
//   {
//     value: 3,
//     label: '3',
//   },
//   {
//     value: 4,
//     label: '4',
//   },
//   {
//     value: 5,
//     label: '5',
//   },
//   {
//     value: 6,
//     label: '6',
//   },
//   {
//     value: 7,
//     label: '7',
//   },
//   {
//     value: 8,
//     label: '8',
//   },
//   {
//     value: 9,
//     label: '9',
//   },
//   {
//     value: 10,
//     label: '10',
//   },
// ];

// function valuetext(value) {
//   return `${value}`;
// }

// function DiscreteSlider() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Typography id="discrete-slider-always" gutterBottom>
//         Enter the rating
//       </Typography>
//       <Slider
//         defaultValue={5}
//         getAriaValueText={valuetext}
//         min={1}
//         max={10}
//         aria-labelledby="discrete-slider-always"
//         step={1}
//         marks={marks}
//         valueLabelDisplay="on"
//       />
//     </div>
//   );
// }

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
          {/* <DiscreteSlider  style={{width: "90%", margin: "0 auto", align: "center"}}>

          </DiscreteSlider> */}
          <Sliders></Sliders>
        <Form.Field style={{width: "90%", margin: "0 auto"}}>
        <label>Name</label>
        <input placeholder='Name'/>
        </Form.Field>
        <Form.Field style={{width: "90%", margin: "0 auto"}}>
        <label>Email ID</label>
        <input placeholder='Email ID' />
        </Form.Field>
        <Form.Field style={{width: "90%", margin: "0 auto"}}>
            <label>Rating Justification</label>
            <textarea placeholder='Justify your Rating' />
        </Form.Field>
        <Form.Field style={{width: "90%", margin: "0 auto"}}>
            <label>Hashtags</label>
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