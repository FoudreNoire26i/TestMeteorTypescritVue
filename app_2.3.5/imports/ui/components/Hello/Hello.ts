import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"

@Component({
})
export default class Hello extends Vue{
    @Prop({required : true}) 
    public readonly message! : string;
    
}