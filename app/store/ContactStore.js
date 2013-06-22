Ext.define("SenTripForce.store.Contact", {
  extend: "Ext.data.Store",
  requires: "Ext.data.proxy.LocalStorage",
 
  config: {
 
    model: "SenTripForce.model.Contact",
 
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
			"type" : "Contact",
		    "url" : "/services/data/v25.0/sobjects/Contact/00QA0000004wQTZMA2"
		      },
		    "FirstName" : "Bertha",
		    "LastName" : "Boxer",
		    "Title" : "Director of Vendor Relations",
		    "Phone" : "(850) 644-4200",
		    "Email" : "bertha@fcof.net"
	}, {
		"attributes" : {
		"type" : "Contact",
		"url" : "/services/data/v25.0/sobjects/Contact/00QA0000004wQTaMAM"
		},
		"FirstName" : "Phyllis",
		"LastName" : "Cotton",
		"Title" : "CFO",
		"Phone" : "(703) 757-1000",
		"Email" : "pcotton@abbottins.net"
	}, {
		"attributes" : {
		"type" : "Contact",
		"url" : "/services/data/v25.0/sobjects/Contact/00QA0000004wQTbMAM"
		},
		"FirstName" : "Jeff",
		"LastName" : "Glimpse",
		"Title" : "SVP, Procurement",
		"Phone" : "886-2-25474189",
		"Email" : "jeffg@jackson.com"
		}
    ],
 
    //Create additional sorts for within the Group.
    sorters: [
      { property: 'LastName', direction: 'ASC'}, 
      { property: 'FirstName', direction: 'ASC'}
    ]   
  } 
});