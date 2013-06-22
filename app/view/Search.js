Ext.define('SenTripForce.view.Search', {
	extend : 'Ext.Panel',
	xtype : 'search',
	
	config : {
		items : [
		    // Title
            {
                xtype : 'toolbar',
                docked: 'top',
                title: 'Book Your Trip!'
            },
		    // Select item to choose the location
		    {
            xtype: 'fieldset',
            items: [
                {
                    xtype: 'selectfield',
                    label: 'Location',
                    id: 'location',
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
                    label: 'Start Date',
                    name: 'start',
                    id:"startdate",
                    value: new Date()
                }
            ]
            },
        
            // Go button
		    {
			xtype : 'button',
			width: "30%",
			centered: true,
			text : 'Go',
			badgeText : 'Search',
			action: 'search'
			} 
		
		]
	}
});
