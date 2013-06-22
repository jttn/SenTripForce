Ext.define("SenTripForce.store.RentalReservation", {
  extend: "Ext.data.Store",
  requires: "Ext.data.proxy.LocalStorage",
 
  config: {
 
    model: "SenTripForce.model.RentalReservation",
 
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
		    "url" : "/services/data/v25.0/sobjects/RentalReservation/00QA0000004wQAEMA2"
		      },
		    "Name" : "Reservation 1",
		    "RentalPropertyId" : "00QA0000004wQTZMA2",
		    "RenterId" : "00QA0000004wQTZMA2",
		    "Date" : "2013-06-22"
		    
	}, {
		"attributes" : {
			"type" : "RentalProperty",
		    "url" : "/services/data/v25.0/sobjects/RentalReservation/00QA0000004wQAFMA2"
		      },
		    "Name" : "Reservation 1",
		    "RentalPropertyId" : "00QA0000004wQTZMA2",
		    "RenterId" : "00QA0000004wQTZMA2",
		    "Date" : "2013-06-23"
	}, {
		"attributes" : {
			"type" : "RentalProperty",
		    "url" : "/services/data/v25.0/sobjects/RentalReservation/00QA0000004wQGFMA2"
		      },
		    "Name" : "Reservation 1",
		    "RentalPropertyId" : "00QA0000004wQTZMA2",
		    "RenterId" : "00QA0000004wQTZMA2",
		    "Date" : "2013-06-24"
	}, {
		"attributes" : {
			"type" : "RentalProperty",
		    "url" : "/services/data/v25.0/sobjects/RentalReservation/00QA0000004wQHFMA2"
		      },
		    "Name" : "Reservation 1",
		    "RentalPropertyId" : "00QA0000004wQTZMA2",
		    "RenterId" : "00QA0000004wQTZMA2",
		    "Date" : "2013-06-25"
		}
    ],
 
    //Create additional sorts for within the Group.
    sorters: [
      { property: 'Name', direction: 'ASC'}, 
      { property: 'Date', direction: 'ASC'}
    ]   
  } 
});