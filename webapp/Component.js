(function() {
	"use strict";
	/*global sap, jQuery */

	/**
	 * @fileOverview Application component to display information on entities from the GWSAMPLE_BASIC
	 *   OData service.
	 * @version @version@
	 */
	jQuery.sap.declare("anubhav.training.edi.ZOVPIDOC.Component");

	jQuery.sap.require("sap.ovp.app.Component");

	sap.ovp.app.Component.extend("anubhav.training.edi.ZOVPIDOC.Component", {
		metadata: {
			manifest: "json"
		}
	});
}());