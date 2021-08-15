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
