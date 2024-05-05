# Intoduction to Pinia Stores

Pinia stores let you pass and manage state between Vue components. Here's a quick example.

{% step file="app.ts" lines="2,5,8" %}
## Initialize Pinia
Before using Pinia, initialize it and pass it to your Vue app.
{% /step %}

{% step file="counterStore.ts" lines="1-11" %}
## Create a store
You can create your first store using the `defineStore` method.
The method takes a `name` and and object which defines the schema of the store.
{% /step %}

{% step file="counterStore.ts" lines="2" %}
### State
The data that's stored in a Pinia store is know as the `state`.
When the state changes, the update is broadcasted to components that consume the store,
allowing your app's UI to update dynamically.

Note that deeply nested objects will break reactivity when you updated nested attributes.
{% /step %}


{% step file="counterStore.ts" lines="3-5" %}
### Getters
Getters allow you to compute values based on your app's state. 
They receive the state as the first parameter to encourage the usage of arrow function.
{% /step %}

{% step file="counterStore.ts" lines="6-10" %}
### Actions
Actions are like class methods and can be used to update the value of the store, fetch data,
reset the store, and more.

Note that the return value of actions are not reactive.
{% /step %}

{% step file="Counter.vue" lines="2, 5" %}
## Consume a store
You can consume stores directly inside a component by importing it.
This means, no deep prop drilling!
{% /step %}

{% step file="Counter.vue" lines="17" %}
### Accessing store state
You can access a store's state by directly consuming it's value such as `store.count`.
{% /step %}

{% step file="Counter.vue" lines="7-9" %}
### Updaing the store
To update values of a store state, use an `action`. When the action is run,
the store's state changes, and the value displayed by your component will reactively change.
{% /step %}

{% step file="Counter.vue" lines="11-13" %}
### Fancy pants computed values
Like normal refs, you can use computed values on `state` of a pinia store.
This is for when the computed logic is component specific, in which case `getters` wouldn't be appropriate
{% /step %}


