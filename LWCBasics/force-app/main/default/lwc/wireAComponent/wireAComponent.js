import { LightningElement, wire } from 'lwc';
import getwireddata from '@salesforce/apex/WiredClass.getwireddata';

import getAccData from '@salesforce/apex/WiredClass.getAccData';
export default class WireAComponent extends LightningElement {
accId='';
accData=[];
error;
    @wire(getAccData) wiretest({error, data}){
        this.accData=[];
        if(data){
            console.log('display Accounts', data);
           
                this.accData.push({label: 'Select Any Account', value:''});
                data.forEach(acc=>{
                    this.accData.push({label:acc.Name, value: acc.Id});
                });
            
        }else if(error){
            this.error=error;
        }
        }
onSelection(event){
    this.accId = event.target.value;
    const evt = new CustomEvent('selectedaccountId',{
        detail:{
            accId: this.accId
        }
    });
    this.dispatchEvent(evt);
}
    @wire(getwireddata,{accId:'$accId'}) wiredData;

    columns=[{label:'Name', type:'text', fieldName: 'Name'}];
}