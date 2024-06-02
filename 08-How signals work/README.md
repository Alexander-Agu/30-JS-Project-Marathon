## A tutorial to help you build your own signal implementation

Signals have been here forever, it is just that they were not as popular until 
SolidJS popularized them by bringing the concept of 
reactivity.


Basically a signal allows you to set a defult value and whenever you change it, any function youve attached to listen for
changes is fired and the new value is passed as a parameter.

Ok lets get into the code : 

```javascript
const signal = function(defaultVal = null){
  // we set that if a default value isnt provided make it null
}
```
Lets do some internal storing and mess with arrays :


```javascript
const signal = function(defaultVal = null){
    let internalVal = defaultVal;

    /*
    For the type of variable for subscription we need one that is iterable
    That means a value we can iterate over, these are : arrays/sets/dictionaries
    By default Objects are not iterable so we wont use them, here i use an array.
    */
    let subscription = [];

    // This array will hold a function in it
}
```

Ok, now we need a system to read the array and call a function attached to our
subscriber, so we would need a function to iterate for the elements in the arrray
and call the function inside it, obviously there will be one element

```javascript
const signal = function(defaultVal = null){
    let internalVal = defaultVal;
    let subscription = [];

    function notifier (){
        for (subscriber of subscription){
            subscriber(internalVal)
        }
    }
    /* Whenever the notifier function gets called it will iterate elements in the array
       and call that element and pass the set value
    */
}
```

We need to complete this though, we will use setters and getters, these are keywords that
allow us to make a function able to set a value to something or return a value of something.

```javascript
// We return an object with functions inside of it.
// If you dont know how, ill explain :

/* We can return objects in js, with values inside of them.
   We use commas (,) to separate these and colon as our eqaul sign ( : )
   i.e::

   const obj = {
     valA : 'A',
     funcA : function(){console.log('Function A')}
   }
   // These can be accessed as

   console.log(obj.valA)
   // Logs A

   obj.funcA()
   // Logs Function A'
*/
```

So to sum it up here is the code :

```javascript
const signal = function(defaultVal = null){
    let internalVal = defaultVal;
    let subscription = [];

    function notifier (){
        for (subscriber of subscription){
            subscriber(internalVal)
        }
    }
    return {
        
        set value(value){
            internalVal = value;
            notifier();
        },

        get value(){
            return internalVal;
        },

        subscribe : function(fn){
            subscription.push(fn)
        },

        unsubscribe : function(){
            subscription = []
        }
    }
}

// USAGE 
let theme = signal('light')

theme.subscribe((val)=>{
    console.log('Initial Val Changed To : ' +val)
})

theme.value = 'dark'

// After that line a msg logged will be Initial Val Changed To : dark
setTimeout(()=>{
    theme.unsubscribe()
    // Gets rid off the subscriber function so when we change values nothing will be logged
    theme.value = 'light'

    console.log('Subscriber Cleared\n')

    console.log(`Current New Value : ${theme.value}`)
},2000)
```
---

The same code is available in this folder as signals.js 



Thank You For Interest.


   
