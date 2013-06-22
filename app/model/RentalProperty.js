//The RentalProperty model will include whatever fields are necessary to manage.
Ext.define("SenTripForce.model.RentalProperty", {
  extend: "Ext.data.Model",
 
  config: {
 
    idProperty: 'Id',
    fields: [
	    {name: 'Id', type: 'string', required: true},
	    {name: 'OwnerId', type: 'string', required: true},
	    {name: 'Name', type: 'string', required: true  },
		{name: 'Description', type: 'string' },
		{name: 'Address', type: 'string'},
		{name: 'City', type: 'string'},
		{name: 'State', type: 'string'},
		{name: 'PostalCode', type: 'string'},
		{name: 'Phone', type: 'string'}
	],
  },
});