import { LightningElement, track } from 'lwc';

export default class ParentDemo extends LightningElement {
    incrementValue=3;
    nonReactiveArray=[1,2,3];
    @track reactiveArray=[1,2,3];

    updateReactiveArray(event){
        this.incrementValue++;
this.reactiveArray.push(this.incrementValue);
    }
    updateNonReactiveArray(event){
        this.incrementValue++;
        this.nonReactiveArray.push(this.incrementValue);
            }
}