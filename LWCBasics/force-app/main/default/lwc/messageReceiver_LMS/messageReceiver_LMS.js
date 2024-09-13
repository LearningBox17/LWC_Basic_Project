import { LightningElement, wire} from 'lwc';
import getOpportunityList from '@salesforce/apex/WiredClass.getOpportunityList';
import { MessageContext, subscribe } from 'lightning/messageService';
import button_clicked from '@salesforce/messageChannel/button_clicked__c';

export default class MessageReceiver_LMS extends LightningElement {
@wire(MessageContext) info;
accId='';
msg='';
error;
opportunities=[];
subscription='';
connectedCallback(){
    if(this.subscription) {
        return;
    }
    this.subscription = subscribe(this.info, button_clicked, (message) => { this.updatedData(message)});
       
    }
    updatedData(message){
        console.log('messagecheck ' , message.information.accId);
        this.accId = message.information.accId;
        this.msg  = message.information.msg;
        getOpportunityList({accId:this.accId}).then(data=>{
            this.opportunities = data;
            console.log('opportunities', data , this.accId);
        }).catch(error => {
            this.error = error;
        });
    }
    columns=[{label:'Name', type:'text', fieldName: 'Name'}, {label:'StageName', type:'text', fieldName: 'StageName'}];
}

