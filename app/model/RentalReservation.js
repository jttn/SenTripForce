//The RentalReservation model will include whatever fields are necessary to manage.
Ext.define("SenTripForce.model.RentalReservation", {
  extend: "Ext.data.Model",
 
  config: {
 
    idProperty: 'Id',
    fields: [
	    { name: 'Id', type: 'string'},
	    { name: 'Name', type: 'string'},
	    { name: 'RentalPropertyId', type: 'string', required: true  },
	    { name: 'RenterId', type: 'string', required: true  },
		{ name: 'Date', type: 'date', required: true  }
	]
  }
});