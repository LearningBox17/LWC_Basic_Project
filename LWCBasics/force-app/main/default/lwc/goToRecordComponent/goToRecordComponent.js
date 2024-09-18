import { LightningElement, wire} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';



export default class GoToRecordComponent extends LightningElement {
    conId='003GC000045BBUpYAO'; //enter any contact id from your org
    

    error;
 name;
 email;

        @wire(getRecord, { recordId: '$conId', fields: [NAME_FIELD, EMAIL_FIELD] })
        wiredRecord({ error, data }) {
           
            if (data) {
             
                this.name = data.fields.Name.value;
                this.email = data.fields.Email.value;
                console.log('data received', data);
}else if(error){
                this.error = error;
}
        }
      //  columns=[{label:'Name', type:'text', fieldName: 'Name'}, {label:'StageName', type:'text', fieldName: 'StageName'}];
    }