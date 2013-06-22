Ext.define('SenTripForce.view.Search', {
	extend : 'Ext.Panel',
	xtype : 'search',
	config : {
		items : [ {
			xtype : 'button',
			text : 'Go',
			badgeText : 'Thanks!',
			itemId:'gobutton'
		} ]

	}
});
