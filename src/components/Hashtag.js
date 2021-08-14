import _ from "lodash";
import faker from "faker";
import React from "react";
import { Search, Grid } from "semantic-ui-react";
import { clean, data, finishSearch, updateSelect } from "../actions";
import { connect } from "react-redux";

//from db
const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, "$"),
}));

// const initialState = {
//   loading: false,
//   results: [],
//   value: "",
// };

// function exampleReducer(state, action) {
//   switch (action.type) {
//     case "CLEAN_QUERY":
//       return initialState;
//     case "START_SEARCH":
//       return { ...state, loading: true, value: action.query };
//     case "FINISH_SEARCH":
//       return { ...state, loading: false, results: action.results };
//     case "UPDATE_SELECTION":
//       return { ...state, value: action.selection };

//     default:
//       throw new Error();
//   }
// }

function Hashtag(props) {
  const timeoutRef = React.useRef();
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current);
    //data
    props.data(data);
    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        props.clean();
        return;
      }

      const re = new RegExp(_.escapeRegExp(data.value), "i");
      const isMatch = (result) => re.test(result.title);
      props.finishSearch(source, isMatch);
    }, 300);
  }, []);
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <Grid>
      <Grid.Column width={6}>
        <Search
          loading={props.exampleReducer.loading}
          onResultSelect={(e, data) => props.updateSelect(data)}
          onSearchChange={handleSearchChange}
          results={props.exampleReducer.results}
          value={props.exampleReducer.value}
        />
      </Grid.Column>

      {/* <Grid.Column width={10}>
        <Segment>
          <Header>State</Header>
          <pre style={{ overflowX: "auto" }}>
            {JSON.stringify({ loading, results, value }, null, 2)}
          </pre>
          <Header>Options</Header>
          <pre style={{ overflowX: "auto" }}>
            {JSON.stringify(source, null, 2)}
          </pre>
        </Segment>
      </Grid.Column> */}
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return { exampleReducer: state.exampleReducer };
};

export default connect(mapStateToProps, {
  data: data,
  clean: clean,
  finishSearch: finishSearch,
  updateSelect: updateSelect,
})(Hashtag);
