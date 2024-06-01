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

let theme = signal('light')

theme.subscribe((val)=>{
    console.log('Initial Val Changed To : ' +val)
})

theme.value = 'dark'

setTimeout(()=>{
    theme.unsubscribe()
    theme.value = 'light'

    console.log('Subscriber Cleared\n')

    console.log(`Current New Value : ${theme.value}`)
},2000)
