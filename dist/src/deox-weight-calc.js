'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = dwcalc;
function dwcalc(num, unit) {
	if (unit == 'kg') {
		var libras = num * 2.2046;
		return libras + ' kg';
	} else if (unit == 'lbs') {
		var kilos = num * 0.453592;
		return kilos + ' lbs';
	} else {
		return 'Introduce una unidad de masa válida, ya sean kg o lbs';
	}
}