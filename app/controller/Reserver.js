Ext.define('SenTripForce.controller.Reserver', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
			reserveButton: {
                tap: 'doSearch'
            }
        },
        refs: {
            reserveButton: 'button[action=reserve]',
            	mainPanel: 'main'
        }
    },

    doSearch: function() {
        var me = this;
//        me.getMainPanel().setActiveItem("#thanksPanel")
//         TODO add dialog here
    },

    doLogout: function() {
        //called whenever any Button with action=logout is tapped
    }
});