//refreshHandler.js
import { LightningElement } from "lwc";
import { registerRefreshHandler, unregisterRefreshHandler } from "lightning/refresh";
import getwireddata from '@salesforce/apex/WiredClass.getwireddata';
export default class RefreshHandler extends LightningElement {
  refreshHandlerID;
  accId = '001GC00003iLhGhYAK'; //Use any accountID from your org
  error;
  opportunities;
  connectedCallback() {
    this.refreshHandlerID = registerRefreshHandler(this, this.refreshHandler);
    // if the component runs in an org with Lightning Locker instead of LWS, use
    // this.refreshHandlerID = registerRefreshHandler(this.template.host, this.refreshHandler.bind(this));
  }
  disconnectedCallback() {
    unregisterRefreshHandler(this.refreshHandlerID);
  }
  refreshHandler() {
    // example usage case for refresh participant
    // fetch some data and report status once complete
    return new Promise((resolve) => {
        getwireddata({accId: this.accId })
            .then((data) => {
                this.opportunities = data;
                console.log('opportunities received, refresh after it now and show me results', data);} );  
                resolve(true);});
            }
    
}