---
title: Vue X
description: Notes on Vue X
---

{% section .hero %}
# Vue X
Generally state is managed in a central store of data

```jsx
//store/store.js
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(VueX);

//We then create a new vueX store
//export as an object called store
export const store = new Vuex.Store({ //Store gets a capital
	state: {
		counter: 0
	}
})
```

All we need to do is then register the store object in our main.js

```jsx
//main.js

import {store} from './store/store';
//added to root vue instance
new Vue({
	el: '#app',
	store,
	render: h => h(App)
})
```

### Interacting with store

```jsx
//some component
export default{
	methods: {
		increment() {
			this.$store.state.counter++
		},
		decrement() {
				this.$store.state.counter--
			}
	}

}
```

or

```jsx
//some component
<template>
	<p>{{counter}}</p>
</template>

<script>
export default{
	computed: {
		counter(){
			return this.$store.state.counter;
		}
	}
}
</script>
```

### Getters

Getters are a central location for getting state which might include calculations

We manage these in the central store file

```jsx
//store.js

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(VueX);
export const store = new Vuex.Store({ 
	state: {
		counter: 0
	}, 
	getters: {
		doubleCounter: state => {
			return state.counter * 2;
		}
	}
})
```

```
//some component
<template>
	<p>{{counter}}</p>
</template>

<script>
export default{
	computed: {
		counter(){
			return this.$store.getters.doubleCounter;
		}
	}
}
</script>
```

### Mapping getters to properties

Instead of getting state for every computed property we import one unit

```jsx
//some component script
import {mapGetters} from vuex;
export default{
//to avoid just one computed property mapgetters, we spread the map getters object
//up with the spead operator, which creates properties with key value pairs
//And we can use other computer properties as well as this
	computed: {
		...mapGetters([
			//specify the getter you want to access through strings
		'doubleCounter', 
		'stringCounter',
		]), 
		myProp(){
		}	
	,}
}

```

### Mutations and mapping mutations

Mutations are commits to the central store which updates the value of state and then all the getter that are using the central state, will update accordingly. 

```jsx
//store.js

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(VueX);
export const store = new Vuex.Store({ 
	state: {
		counter: 0
	}, 
	getters: {
		doubleCounter: state => {
			return state.counter * 2;
		}
	}, 
	mutations: {
		increment: state => {
			state.counter++; //there's no return statement as we're making an actual 
											// change to the the state
		}, 
		decrement: state => {
				state.counter--;
		}
	}
})
```

If we want to map mutations we do it much in the same way as mapping getters

```jsx
import {mapMutations} from vuex;
export default{
	methods: {
		...mapMutations([
			//specify the mutation you want to make
			'increment', 
			'decrement',
		]), 
		myMethod(){
		}	
	,}
}

```

Mutations have to be synchronous. You cant track which mutation was responsible for which state change. So you need a way to be able to combine asynchronous tasks with mutations

### Actions

Actions are a way for you to run asynchronous methods and use mutations

```jsx
//store.js

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(VueX);
export const store = new Vuex.Store({ 
	state: {
		counter: 0
	}, 
	mutations: {
		increment: state => {
			state.counter++; //there's no return statement as we're making an actual 
											// change to the the state
		}, 
		decrement: state => {
				state.counter--;
		}
	}, 
	actions: {
		increment: ({commit}) => {  //this uses destructuring of context.commit()
			commit('increment');//uses one of the mutations available
		}, 
		decrement: ({commit}) => {
			commit('decrement');
		},
		asyncDecrement: ({commit}) => { //Here is an example of an asynchronous mutation
			setTimeout(() => {
				commit('decrement');
			}, 1000)
		},
	}
})
```

```jsx
//some component script
import {mapActions} from vuex;
export default{
	methods: {
		...mapActions([
			'increment', 
			'decrement',
		]), 
		myMethod(){
		}	
	,}
}
```

### Action payloads

You may want to pass an argument or multiple arguments to a mutation

```jsx
//store.js

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(VueX);
export const store = new Vuex.Store({ 
	state: {
		counter: 0
	}, 
	mutations: {
		increment: (state, payload) => {
			state.counter += payload; //there's no return statement as we're making an actual 
											// change to the the state
		}, 
		decrement: (state, payload) => {
				state.counter -= payload;
		}
	}, 
	actions: {
		increment: ({commit}, payload) => {  //this uses destructuring of context.commit()
			commit('increment');//uses one of the mutations available
		}, 
		decrement: ({commit}, payload) => {
			commit('decrement', payload.by);
		},
		asyncDecrement: ({commit}, payload) => { //Here is an example of an asynchronous mutation
			setTimeout(() => {
				commit('decrement', payload.by);
			}, payload.time)
		},
	}
})
```

```jsx
<template>
		<btn @click='asyncincrement({by: 100, time: 500})></btn>
</template>

//some component script
import {mapActions} from vuex;
export default{
	methods: {
		...mapActions([
			'asyncincrement', 
		]), 
		myMethod(){
		}	
	,}
}
```

### **Folder structure with Vuex**

The file structure should look something like this

- components
- main.js
- App.vue
- store
    - modules
        
        Modules splits up the file to watch individual state object
        
        - stringOne.js
            
            ```jsx
            const state = {
            	stringOne: ''
            }
            //including all the getters, mutations and actions
            
            export default {
            	state, 
            	getters, 
            	mutations, 
            	actions
            }
            ```
            
        
        intOne.js
        
    - Store.js this should contain our central store but we import the smaller states in to the store.js file

{% /section  %}