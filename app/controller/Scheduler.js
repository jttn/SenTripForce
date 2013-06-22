Ext.define('SenTripForce.controller.Scheduler', {
extend: 'Ext.app.Controller',

    config: {
		stores:['TestStore'],
        control: {
			searchButton: {
                tap: 'doBookIt'
            }
        },

        refs: {
            searchButton: 'button[action=bookit]',
            	mainPanel: 'main'
        }
    },

    doBookIt: function() {
        var me = this;
        me.getMainPanel().setActiveItem("#reserverPanel")
    },

    doLogout: function() {
        //called whenever any Button with action=logout is tapped
    }
});