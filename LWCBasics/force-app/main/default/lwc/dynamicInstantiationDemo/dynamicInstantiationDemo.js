import { LightningElement } from 'lwc';

export default class DynamicInstantiationDemo extends LightningElement {
  
    componentConstructor;
   async connectedCallback() {
    setTimeout(() => {
      this.componentConstructor = ctor;
    }, 5000);
  
      const { default: ctor } = await import("c/wireAComponent");
      console.log(ctor);
    }
     
}