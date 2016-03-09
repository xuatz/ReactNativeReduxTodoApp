import React, { Text, View, PropTypes, StyleSheet,} from 'react-native';

let Todo = React.createClass({
   render(){
      return(
         <Text onPress={this.props.onClick}
            style={this.props.completed ? styles.active : styles.completed}>
            {this.props.text} + {this.props.completed} + 'heee'
         </Text>
      );
   }
});

var styles = StyleSheet.create({
   active: {
      color: 'red',
      textDecorationLine: 'none'
   },
   completed: {
      fontWeight: 'bold',
      textDecorationLine: 'line-through'
   },
   base: {
      width: 38,
      height: 38,
   },
   background: {
      backgroundColor: '#222222',
   },
});

Todo.propTypes = {
   onClick: PropTypes.func.isRequired,
   text: PropTypes.string.isRequired,
   completed: PropTypes.bool.isRequired
}

export default Todo;
