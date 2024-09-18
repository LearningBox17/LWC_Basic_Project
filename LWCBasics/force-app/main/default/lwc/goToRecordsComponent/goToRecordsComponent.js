import { LightningElement, wire } from "lwc";
import { getRecords } from "lightning/uiRecordApi";
import USER_NAME_FIELD from "@salesforce/schema/User.Name";
import USER_EMAIL_FIELD from "@salesforce/schema/User.Email";
import ACCOUNT_NAME_FIELD from "@salesforce/schema/Account.Name";

export default class GetRecordsExample extends LightningElement {

  resultData=[];
  error;
  @wire(getRecords, {
    records: [
      {
        recordIds: ["005GC00000lCk0WYAS"],
        fields: [USER_NAME_FIELD],
        optionalFields: [USER_EMAIL_FIELD],
      },
      {
        recordIds: ["001GC00003iLhGhYAK","001GC00003iLhGtYAK"],
        fields: [ACCOUNT_NAME_FIELD],
      },
    ],
  })
  wiredRecords({error, data}){
    if(data){
      this.resultData = [];
      console.log('data received in getRecords', data);
      data.results.forEach((record)=>{
     
        this.resultData.push({name: record.result.fields.Name.value});
      })
    }
    else if(error){
      this.error=error;
    }
  };
}