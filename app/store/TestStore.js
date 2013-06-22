Ext.define('SenTripForce.store.TestStore', {
	extend : 'Ext.data.Store',
	requires : [ 'SenTripForce.model.TestModel' ],
	config : {
		model : 'SenTripForce.model.TestModel',
		data : [ {
			company : 'Swan and Dolphin Hotel',
			w1 : 1000,
			w2 : 1000,
			w3 : 3000,
			w4 : 3000,
			pct : 0.03,
			updated : '9/1/2010'
		}, {
			company : 'My House',
			w1 : 1000,
			w2 : 1000,
			w3 : 2000,
			w4 : 2000,
			pct : 1.47,
			updated : '9/1/2010'
		}, {
			company : 'Joe\'s Condos',
			w1 : 1000,
			w2 : 1000,
			w3 : 4000,
			w4 : 1000,
			pct : 0.02,
			updated : '9/1/2010'
		} ]
	}
})