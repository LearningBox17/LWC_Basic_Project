public with sharing class WiredClass {
    @AuraEnabled(cacheable=true)
   public static List<Account> getAccData() {
      return [SELECT Id, Name FROM Account ORDER BY Name];
   }
   @AuraEnabled(cacheable=true)
   public static List<Contact> getwireddata(string accId) {
      return [SELECT Id, Name, Email FROM Contact WHERE AccountId=:accId];
   }

   @AuraEnabled
   public static List<Opportunity> getOpportunityList(string accId) {
      return [SELECT Id, Name, StageName FROM Opportunity WHERE AccountId=:accId];
   }



}