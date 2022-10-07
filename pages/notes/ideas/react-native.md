---
title: React Native Intro Notes
description: Some introductory notes on React Native
---

{% section .hero %}

# React Native Intro Notes
What are the main imports?

How do you import from react native?

How do you add styling?

How do you attach a component to the App?

How do you attach variables with JSX?

What data types can be used inside curly brackets?

Imports

```jsx
import React from 'react';//react library - component interaction
import {View, Text, StyleSheet} from 'react-native';//component to mobile

```

component creation

```jsx
const myComponent = () => {
	return <Text style={styles.TextStyle}>My Text</Text>;
}
```

StyleSheet

```jsx
const styles = stylesheet.create({
	TextStyle: {
		fontSize: 30
	}
})
```

exports

```jsx
export default myComponent;
```

Attaching components to App 

```jsx
//APP.JS
import myComponent from './src/screens/componentsScreen';//component address
const navigator = createStackNavigator(
	{
		myComp = myComponent, //declare component
	}, 
	{
		initialRouteName: 'myComp' , //initial component displayed
		defaultNavigationOptions: {
			title: 'App'
		}
	}
);
export default createAppContainer(navigator);

```

JSX 

- JSX elements can be assemble like normal HTML
- JSX is pseudo javascript, that is parsed using Babel in to JS

```jsx
const myComp = () => {
return (
	<View>
		<Text>Hello World</Text>
		<Text>A second line of text</Text>
	</View>
);
};
```

JSX Props

- Components can have their own properties which can be customised.
- These are just configuration options, created pon the fly with the elements.

```jsx
<Text style={style.TextStyle}></Text>//style is prop, a property of <Text>
```

JS Variables

- You can use variables inside JSX by using curly braces { }
- **This does not work for objects**

```jsx
const myComp = () => {
const name = "Neil";
return (
	<View>
		<Text>**{name}**</Text> //text will display 'neil'
	</View>
);
}
```

- You can assign JSX to a variable and referene that var in the JSX

```jsx
const myComp = () => {
const name = <Text>This was made in a const</Text>;
return (
	<View>
		**{name}**//text will display 'This was made in a const'
	</View>
);
}
```
## Lists

How do you open a list in react?

What are the two ways of looping through a list with a key?

What sort of properties can you add on to a list?

```jsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const myList = () =>{
	const listItems = [
	{name: "Person 1", key: "0"}, //another way to add keys
	{name: "Person 2", key: "1"}, 
	{name: "Person 3", key: "2"}, 
	{name: "Person 4"}, 
	{name: "Person 5"}, 
	{name: "Person 6"}, 
	{name: "Person 7"}, 
	{name: "Person 8"}, 
	];
}
return (
<View>
	<FlatList 
		keyExtractor={person => {person.name} //one way to get a key
		data={listItems}
		renderItem = {({item})} =>{ //{({item})} will grab the element we need from the obj
			return <Text>{item.name}<Text>
		} 
	>
</View>

);
}
const styles = StyleSheet.create({});
export default myList;
```

Additional properties of list

```jsx
<View>
	<FlatList 
		horizontal
		showsHorizontalScrollIndicator = {false}

		keyExtractor={person => {person.name} //one way to get a key
		data={listItems}
		renderItem = {({item})} =>{ //{({item})} will grab the element we need from the obj
			return <Text>{item.name}<Text>
		} 
	>
</View>
```

- You can change the scroll behaviour and the bar options by using
    - horizontal
    - showsHorizontalScrollBehaviour

## Screen Navigation
What are the two options for interaction in React Native?

**Buttons**

When we have multiple component screens, we may want to be able to swicth between them. 

Basic default setting is to have a default route that the app points toward. 

```jsx
initialRouteName: 'Home'
```

```jsx
import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const Home = ({navigation}) => {

return (
	<View>
		<Text>
			<Button 
				title="Click Components"
				onPress={() => navigation.navigate('Components)}
			/>
		</Text>
	<View>
);
};
```

**Touchable Opacity**

This is the general, more used convention for a button. 

There is little general styling, but allows you to press anything passed in to the element. 

```jsx
const Home = ({navigation}) => { //destructure the code to remove repeating
return (
	<View>
		<TouchableOpacity onPress={() => navigation.navigate('Components')}>
			<Text>Click me</Text> //No defaut styling, but opacity changes on click.		
		</TouchableOpacity>
	<View>
);
};
```
## Component Props
```jsx
//PARENT
import React from 'react';
import {View, Text, StyleSheet} from 'react';
import Child from '../components/child'

const Parent = () => {
	return (
		<View>
			<Child title="one"/>//pass the value in to the child compenent
			<Child title="one"/>
			<Child title="one"/>
		</View>
	);
};
const styles = StyleSheet.create({});
export default parent;

```

```jsx
//CHILD
import React from 'react'
import {View, Text, StyleSheet} from 'react'

const child = props => {//the child component is being passed the props object
	return <Text>{props.title}</Text>//display the title section 
};

const styles = StyleSheet.create({});

export default child;

```

**Showing Images**

```jsx

import React from 'react';
import {Text, View, Image} from 'react-native';

const component = props => {
return (
<View>
	<Image  source={require('./source/file')}/>
</View>
);
};
```

Passing image details from parent to child components

```jsx
//PARENT
const parent = () => {
	return(
		<View>
			<Child title='blue' imgSource={require(../assets/blue.jpg)}/>
			<Child title='red' imgSource={require(../assets/red.jpg)}/>
			<Child title='green' imgSource={require(../assets/green.jpg)}/>
		</View>
	);
};
```

```jsx
//CHILD
const child = props =>{
return(
		<View>
			<Image imgSource={props.imgSource}>
		</View>
);
}
```
## State Management
Props ⇒ Are for passing data from a parent to a child

State ⇒ System to track a piece of data that will change over time. If it changes, app will rerender

an important function of this involves array destructuring. 

```jsx
const colors = ['red', 'green']//values in a normal array

const [color1 ,color2] = colors; //set these values in the square brackest to the 
//values in the color array
```

**Counter Example**

```jsx
import React, {useState} from 'react'
import {Button, Text, View} from 'react-native'; 

const counter = () => {
const [counter, setCounter] = useState(0);//pass in starting value in to useState
//counter value is now set to 0
return(

<View>
	<Button title='inrease' onPress={()=>{setCounter(counter+1)}}/>
	<Button title='decrease' onPress={()=>{setCounter(counter-1)}}/>
	<Text> Counter: {counter}</Text>
</View>
);
}
```

State lifecycle

1. App starts up 
2. Navigation to screen → state watche variable is initialized
3. onPress callback function is called
4. onPress calls setCounter and updates its value
5. after a brief moment React will then re-render the screen
6. Now the counter variable has a new value, but is not re-initialized. 

State Always makes use of a setter function

State variable can be named anything

When you manage state  in a parent component, it rerenders the child componenent as well. 

Generating Random Colors

```jsx
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const randColors = () => {
const [colors, setColors] = useState([]);
return(
	<View>
		<Button title='add color' onPress={()=>{
		setColors([...colors, randomHex])
		//...colors makes a new object of colors in memory, as well as the randomHex addition
		}}/>
		<View style={{height:100, width: 100, backgroundColor: randomHex()}}/> 
	</View>
);
};

const randomHex = () => {

const hex = Math.floor(Math.random()*16777215).toString(16);

return `#${hex}`
}
```

Adding to a FlatList

```jsx
import React, {useState} from 'react';
import {Button, Text, View, FlatList} from 'react-native';

const ColorScreen = () => {
const [colors, setColors] = useState([]);

return (
	<View>
		<Button 
			title='add color'
			onPress={()=>{
		setColors([...colors, randomHex()])//rerender the component
		}} />
//displays a list of all the objects in the array.
//Each time that we call the setter function it is also rerendering this flatlist. 
		<FlatList 
		keyExtractor={(item) => item}
		data={colors}
		renderItem={({item})=>{
				return <View style={{height: 100, width: 100: backgroundColor: item}} />
		}
		/>
	
	</View>
);
};

const randomHex = () => {
	const hex = Math.floor(Math.random()*16777215).toString(16);
return `#${hex}`
}
```

### Adjusting state from child components

The most senior component which reads or changes state should be where the state is managed. 

If the child needs to be able to update state, we can pass a callback function from the parent to the child, as a prop, to invoke the state change setter method. 

```jsx
import React, {useState} from 'react';
import {View, Button,Text, StyleSheet} from 'react-native';
import Child from './src/child';

const INCREMENT = 10;

const ParentScreen = () => {
const [red, setRed] = useState(0);
const [blue, setBlue] = useState(0);
const [green, setGreen] = useState(0);

const SetColor = (color, change) => {
	switch(color) {
	case 'red': 
		red+change > 255 || red+change < 0 ? null : setRed(red+ INCREMENT);
		return;
	case 'red': 
		blue+change > 255 || red+change < 0 ? null : setRed(red+ INCREMENT);
		return;
	case 'red': 
		red+change > 255 || red+change < 0 ? null : setRed(red+ INCREMENT);
		return;
	}
}
	return(
	<View>
		<Child 
			onIncrease={()=>{setRed(red+1)}}
			onDecrease={()=>{setRed(red-1)}} 
			color='red' />
		<Child 
			onIncrease={()=>{setBlue(red+1)}} 
			onDecrease={()=>{setBlue(red-1)}} 
			color='blue' />
		<Child 
			onIncrease={()=>{setGreen(red+1)}} 
			onDecrease={()=>{setGreen (red-1)}} 
			color='green' />
	</View>
	);
};

```

```jsx
import React, {useState} from 'react';
import {View, Button,Text, StyleSheet} from 'react-native';
import Child from './src/child';

const INCREMENT = 10;

const ParentScreen = () => {
const [red, setRed] = useState(0);
const [blue, setBlue] = useState(0);
const [green, setGreen] = useState(0);

const SetColor = (color, change) => {
	switch(color) {
	case 'red': 
		red+change > 255 || red+change < 0 ? null : setRed(red+ INCREMENT);
		return;
	case 'blue': 
		blue+change > 255 || blue+change < 0 ? null : setBlue(blue+ INCREMENT);
		return;
	case 'green': 
		green +change > 255 || green+change < 0 ? null : setGreen(green+ INCREMENT);
		return;
	};
};
	return(
	<View>
		<Child 
			onIncrease={()=>setColor('red', INCREMENT)}}
			onDecrease={()=>setColor('red', -1* INCREMENT)} 
			color='red' />
		<Child 
			onIncrease={()=>setColor('blue', INCREMENT)} 
			onDecrease={()=>setColor('blue', -1* INCREMENT)} 
			color='blue' />
		<Child 
			onIncrease={()=>setColor('green', INCREMENT)} 
			onDecrease={()=>setColor('green', -1*INCREMENT)} 
			color='green' />
	</View>
	);
};

```

Child

```jsx
const colorCounter = ({color, onIncrease, onDecrease}) => {

	return(
		<View>
			<Text>{color}</Text>
			<Button onPress={()=> onIncrease()}> //pass down callback as prop which uses setter function
			<Button onPress={()=> onDecrease()}/>
		</View>
)
}
```

### Reducers

```jsx
import React, {useReducer} from 'react';
import {Text, Button, View} from 'react-native';

const INCREMENT = 15;
const reducer = (state, action) => {
//state === {red: number, green: number, blue: number}
//action === {colorToChange: red || green || blue, amount: 15||-15}
		switch(action.type){
		case 'change_red':
			return state.red+action.payload > 255 || state.red + action.payload < 0 
			? state
			: {...state, red: state.red + action.payload}
		case 'change_green':
			return state.green + action.payload > 255 || state.green + action.payload < 0 
			? state
			: {...state, green: state.green + action.payload}
		case 'change_blue':
			return state.blue+action.payload > 255 || state.blue + action.payload < 0 
			? state 
			: {...state, blue: state.blue + action.payload}
		default:  return state;
		}

	}
const ColorScreen = () => {
	//Use Reducer takes reducer function and initial state
	//reducer function take state and action
	//state is set with initial value
	const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});

	const {red, green, blue} = state;
return(
<View>
//pass in object to dispatch
	<ChildCounter 
		onIncrease={()=> dispatch({type: 'change_red', payload: INCREMENT })}
		onDecrease={()=> dispatch({type: 'change_red', payload: -1 * INCREMENT })}
	/>
	<ChildCounter
		onIncrease={()=> dispatch({type: 'change_green', payload: INCREMENT })} 
		onDecrease={()=> dispatch({type: 'change_green', payload: -1 * INCREMENT })}/>
	<ChildCounter 
		onIncrease={()=> dispatch({type: 'change_blue', payload: INCREMENT })} 
		onDecrease={()=> dispatch({type: 'change_blue', payload: -1 * INCREMENT })}/>
</View>
)
}
```

**Reducer summary**

1. create your state management  with useReducer
    1. Takes an initial state object and a pointer to a function named reducer
    2. Stores in state init in the state object space in the array. 
2. child component attaches a dispatch function
    1. dispatch function contains some bare mimimum info on what will be changed
    2. When the dispatch is called, it triggers the reducer function
3. Reducer function, takes the current data state, and the dispatch object details.
    1. new state is created in reducer function
    2. dispatch object is attached to the action 
4. reducer function returns a state object, with either the original state, or a completely new object, with added state changes. 
5. State is now succesfully updated across child components

Reducer action conventions

```jsx
onIncrease={()=>{type: 'change_blue', payload: 20}}
```

Type should describe the exact operation that we want to make. 

Payload is the data that is critical to the operation. 

### Text input handling

```jsx
import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const textInputScreen = () => {
	const [textInput, setText ] = useState('')
	return (
	<View> 
	//Text inputs have no default styling
		<TextInput 
			style={styles.inputBox}
			autoCapitilize='none' 
			autoCorrect={false}
			value={textInput}
			onType={(typedValue) => {setText(typedValue)}}
    />
		<Text>{name}</Text>
	</View>
);
}
const styles = StyleSheet.create({
inputBox: {
	margin: 10, 
	borderColor: #000000, 
	borderWidth: 2,
}
});
```

We pass the state value back in to the child

We then rerender the parent and child everytime something is typed

This allows us to manage state from the parent and display it elsewhere.
{% /section %}