Ext.define('SenTripForce.view.Main', {
	requires:['SenTripForce.view.Search',
	          'SenTripForce.view.Scheduler',
              'SenTripForce.view.Reserver'],
	extend : 'Ext.Panel',
	xtype : 'main',
	config : {
		layout : 'card',
		items : [ {
			xtype : "search"
		}, {
			xtype : "scheduler"
		}, {
			xtype : "reserver"
		} ]
	}
});
