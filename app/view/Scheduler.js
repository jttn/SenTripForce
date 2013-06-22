Ext.define('SenTripForce.view.Scheduler', {
	extend : 'Ext.Panel',
	xtype : 'scheduler',
	config : {
	    itemId: 'schedulerPanel',
		html:"This is where scheduler panel goes",
		items : [ {
			xtype : 'button',
			text : 'BookIt',
			action: 'bookit'
	
		} ]
	}
});
