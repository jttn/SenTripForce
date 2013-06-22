Ext.define('SenTripForce.controller.Search', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
			searchButton: {
                tap: 'doSearch'
            }
        },
        refs: {
            searchButton: 'button[action=search]',
            	mainPanel: 'main'
        }
    },

    doSearch: function() {
        var me = this;
        Ext.Msg.alert('Search For', 
        	"Location: " + Ext.getCmp('location').getValue()
        	+ "<br>Start Date: " + Ext.getCmp('startdate').getValue());
        me.getMainPanel().setActiveItem("#schedulerPanel")
    },

    doLogout: function() {
        //called whenever any Button with action=logout is tapped
    }
});