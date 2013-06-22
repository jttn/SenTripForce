Ext.define('SenTripForce.view.Scheduler', {
	extend : 'Ext.Container',
	requires : 'SenTripForce.view.SchedulerCmp',
	xtype : 'scheduler',
	config : {

		itemId : 'schedulerPanel',
		layout: 'vbox',
		items : [ {
			xtype : 'schedulercmp',
			flex:1
		}
//		, {
//			//flex:1,
//			xtype : 'button',
//			text : 'BookIt',
//			action : 'bookit'
//
//		} 
		]
	}
});
