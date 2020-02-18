/**
 * @file Main file.
 * @author Beatriz Sopeña Merino <beatrizsmerino@gmail.com>
 * @copyright (2020)
 */





/**
 * @requires apiMetro
 * @requires googleMaps
 */
import * as apiMetro from './data-api.js';
import * as googleMaps from './google-maps.js';





/**
 * @function functionAnonimAutoExecuted
 * @description Anonymous auto executed function
 * @see Used inside:
 * @see - 'google-maps.js' -> {@link module:googleMaps.insertTagScript}, {@link module:googleMaps.API}, {@link module:googleMaps.API_KEY_MAP}, {@link module:apiMetro.urlAPI}, {@link module:googleMaps.createMap}
 */
(function () {
	if (
		googleMaps.insertTagScript("https://unpkg.com/@google/markerclustererplus@4.0.1/dist/markerclustererplus.min.js") &&
		googleMaps.insertTagScript(`${googleMaps.API}js?key=${googleMaps.API_KEY_MAP}`)
	) {
		apiMetro.getData(apiMetro.urlAPI)
			.then(result => {
				// console.log(result);
				googleMaps.createMap(result);
			});
	}
})();