Ext.define('SenTripForce.view.Search', {
	extend : 'Ext.Panel',
	xtype : 'search',
	
	config : {
		items : [
		    // Select item to choose the location
		    {
            xtype: 'fieldset',
            title: 'Select',
            items: [
                {
                    xtype: 'selectfield',
                    label: 'Location',
                    options: [
                        {text: 'Orlando',  value: 'orlando'},
                        {text: 'Hawaii', value: 'hawaii'},
                        {text: 'Las Vegas',  value: 'lasvegas'}
                    ]
                }
            ]
            },
	        
            // Start date field
            {
            xtype: 'fieldset',
            items: [
                {
                    xtype: 'datepickerfield',
                    label: 'Start',
                    name: 'start',
                    value: new Date()
                }
            ]
            },
        
            // end date field
            {
            xtype: 'fieldset',
            items: [
                {
                    xtype: 'datepickerfield',
                    label: 'End',
                    name: 'end',
                    value: new Date()
                }
            ]
            },
        
            // Go button
		    {
			xtype : 'button',
			text : 'Go',
			badgeText : 'Thanks!',
			action: 'search'
			} 
		
		]
	}
});
