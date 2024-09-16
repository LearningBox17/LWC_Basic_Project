// refreshButton.js
import { LightningElement } from "lwc";
import { RefreshEvent } from "lightning/refresh";

export default class RefreshButton extends LightningElement {
  beginRefresh() {
    this.dispatchEvent(new RefreshEvent());
  }
}