import Vue from "vue"
import { Component } from "vue-property-decorator"
import Hello from "../../components/Hello/Hello.vue"

@Component({
    components : {
        Hello
    }
})
export default class Home extends Vue{
    public mySuperMessage : string = "|"

    mounted() {
        
        this.mySuperMessage = "Hello World !!!"
    }
}