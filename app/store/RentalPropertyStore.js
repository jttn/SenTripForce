Ext.define("SenTripForce.store.RentalProperty", {
  extend: "Ext.data.Store",
  requires: "Ext.data.proxy.LocalStorage",
 
  config: {
 
    model: "SenTripForce.model.RentalProperty",
 
    //You can type the following Apex code in the Execute Anonymous window to 
//generate JSON which can then be cut and paste in the component. You can  
    //use the Eclipse Force.com IDE Schema Browser or the Workbench to build SOQL
    //
// List<Lead> leadList = 
//  [SELECT FirstName,LastName,Company,Title,Phone,Email,Status FROM Lead]; 
    //  
    // system.debug(JSON.serializePretty(leadList));
    //
    // While you can easily remove the 'attributes' node, it will be ignored.
 
data: [
    {
		"attributes" : {
			"type" : "RentalProperty",
		    "url" : "/services/data/v25.0/sobjects/RentalProperty/00QA0000004wQTZMA2"
		      },
		    "PropertyOwnerId" : "00QA0000004wQTbMAM",
		    "Name" : "My Rental Property 1",
		    "Description" : "Rental property description here",
		    "Address" : "123 Main Street",
		    "City" : "Orlando",
		    "State" : "FL",
		    "PostalCode" : "12444",
		    "Phone" : "(850) 644-4200"
	}, {
		"attributes" : {
			"type" : "RentalProperty",
		    "url" : "/services/data/v25.0/sobjects/RentalProperty/00QA0000004wQTVMA2"
		      },
		    "PropertyOwnerId" : "00QA0000004wQTbMAM",
		    "Name" : "My Rental Property 2",
		    "Description" : "Another Rental property description here",
		    "Address" : "999 Main Street",
		    "City" : "Orlando",
		    "State" : "FL",
		    "PostalCode" : "12444",
		    "Phone" : "(850) 644-4200"
		}
    ],
 
    //Create additional sorts for within the Group.
    sorters: [
      { property: 'City', direction: 'ASC'}, 
      { property: 'State', direction: 'ASC'}
    ]   
  } 
});