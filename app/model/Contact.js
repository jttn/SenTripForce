//The Lead model will include whatever fields are necssary to manage.
Ext.define("SenTripForce.model.Contact", {
  extend: "Ext.data.Model",
 
  config: {
 
    idProperty: 'id',
    fields: [
	    { name: 'Id', type: 'string'},
	    { name: 'FirstName', type: 'string', required: true  },
		{ name: 'LastName', type: 'string', required: true  },
		{ name: 'Title', type: 'string' },
		{ name: 'Phone', type: 'string', required: true  },
		{ name: 'Email', type: 'string', required: true  }
	 
	    //This is a derived field using an anonymous 'convert' 
		//anonymous function to calculate a string value.
		{ name: 'FullName',
			convert: function(value, record) {
				var fn = record.get('FirstName');
				var ln = record.get('LastName');
				return fn + " " + ln;
			}
		},
	],
  },
});