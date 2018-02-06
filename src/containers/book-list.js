import React, {Component} from 'React';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{
  renderList() {
    return this.props.books.map((book)=>{
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul clasName="list-group col-sm-4">
      {this.renderList()}</ul>
    )
  }
}

//This is the glue function between React and Redux
function mapStateToProps (state){
  //Whatever returned here will show up as props inside of Books
  return {
    books: state.books
  };
}

//Anything returned from the function will end up as props on the
//BookList container
function mapDispatchToProps(dispatch) {
  //Whenenver seletBook is called, the result should be passed to
  // all of out reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

//The connect function takes a component and a function,
//and turns it to a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
