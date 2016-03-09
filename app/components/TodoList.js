import React, { Text, View, PropTypes} from 'react-native';
import Todo from './Todo'

let TodoList = React.createClass({

   render() {
      return (
         <View>
         {this.props.todos.map((todo, index) =>
            // <Todo {...todo}
            // key={index}
            // onClick={() => this.props.onTodoClick(index)} />
            <Todo {...todo}
               key={index}
               onClick={() => this.props.onTodoClick(todo.id)}>
            </Todo>
         )}



         </View>
      )
   }

});

TodoList.propTypes = {
   onTodoClick: PropTypes.func.isRequired,
   todos: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
   }).isRequired).isRequired
}

export default TodoList;
