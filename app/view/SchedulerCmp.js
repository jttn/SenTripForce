Ext.define('SenTripForce.view.SchedulerCmp', {
	extend : 'Ext.ux.touch.grid.List',
	requires : [ 'Ext.ux.touch.grid.List', 'SenTripForce.model.TestModel',
			'SenTripForce.store.TestStore' ],
	xtype : 'schedulercmp',
	config : {

		store : Ext.create("SenTripForce.store.TestStore"),

		features : [ {
			ftype : 'Ext.ux.touch.grid.feature.Sorter',
			launchFn : 'initialize'
		} ],
		columns : [ {
			header : 'Property',
			dataIndex : 'company',
			style : 'padding-left: 1em;',
			width : '40%',
			filter : {
				type : 'string'
			}
		}, {
			header : 'Week1',
			dataIndex : 'w1',
			style : 'text-align: center;',
			width : '15%',
			filter : {
				type : 'numeric'
			},
			renderer : function(value) {

				return value + ' points';
			}
		}, {
			header : 'Week2',
			dataIndex : 'w2',
			cls : 'centered-cell redgreen-cell',
			width : '15%',
			renderer : function(value) {

				return value + ' points';
			}
		}, {
			header : 'Week3',
			dataIndex : 'w3',
			cls : 'centered-cell redgreen-cell',
			width : '15%',
			renderer : function(value) {

				return value + ' points';
			}
		}, {
			header : 'Week4',
			dataIndex : 'w4',
			cls : 'centered-cell redgreen-cell',
			width : '15%',
			renderer : function(value) {

				return value + ' points';
			}
		}
		// , {
		// header : '% Change',
		// dataIndex : 'pct',
		// cls : 'centered-cell redgreen-cell',
		// width : '15%',
		// renderer : function(value) {
		// var cls = (value > 0) ? 'green' : 'red';
		//
		// return '<span class="' + cls + '">' + value + '</span>';
		// }
		// }, {
		// header : 'Last Updated',
		// dataIndex : 'updated',
		// hidden : true,
		// style : 'text-align: right; padding-right: 1em;',
		// sortable : false,
		// width : '15%'
		// }
		]

	}

});
