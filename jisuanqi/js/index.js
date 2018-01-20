var mapGetters=Vuex.mapGetters

var store =new Vuex.Store({
        state:{
            // count:0
            count:[]
        },
    mutations:{
            setCount(state,payload){
                state.count=payload
            },
            //payload
            add(state){
                state.count.push(1)
            },
            addPayload(state,payload){
                state.count.push(payload)
            },
             remove(state){
            state.count.pop();
            }
    },
    getters:{
            sum(state,getters){
                return state.count.reduce((a,b)=> {
                    return a+b
                },0)
            },
            len(state){
                return state.count.length
         },
            avg(state,getters){
                return getters.sum/getters.len
           }
        },
    actions:{
        findAction(context){
            //
            var _count=[]
            axios.get("http://localhost:8080/api/count")
                .then(response =>{
                    console.log(response)
                    this._count = response.data.count
                    context.commit("setCount",this._count)
                })
        },
        addAction(context){
            axios.post("http://localhost:8080/api/count",{"number":1})
                .then(response =>{
                    console.log(response)
                    context.commit("add")
                })
        },
        addPayloadAction(context){
            var payload=Math.floor(Math.random()*(10-1)+1)
            axios.post("http://localhost:8080/api/count",{"number":payload})
                .then(response =>{
                    console.log(response)
                    context.commit("addPayload",payload)
                })
        },
        removeAction(context){
                axios.get("http://localhost:8080/api/delete")
                    .then(response =>{
                        console.log(response)
                        context.commit("remove")
                    })
            },
    }
})

var Counter={
    template:`
      
    `,
    computed:{
        counter(){
            return store.state.count;
        },
        sum(){
            return store.getters.sum
        },
        len(){
        return store.getters.len
        }
    }
}


var vm =new Vue({
    el:"#app",
    data:{},
    store,
    components:{
      "counter":Counter
    },
    methods:{
        add(){
            store.dispatch("addAction")
        },
        addPayload(){
            // var payload=Math.floor(Math.random()*(10-1)+1)
            // store.commit("addPayload",3)
            store.dispatch("addPayloadAction")
        },
        remove(){
            // store.commit("remove")
            store.dispatch("removeAction")
        }
    },
    created(){
        store.dispatch("findAction")
    }

})