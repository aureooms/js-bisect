'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.heapreplace = heapreplace;

var _error = require('../error');

var _core = require('./core');

function heapreplace(heap, item) {

	var x = heap.data;
	var n = x.length;

	if (n === 0) throw new _error.IndexError("heapreplace");

	var oldroot = x[0];

	x[0] = item;

	// sift down the new root

	(0, _core.siftdown)(heap.compare, x, 0, n, 0);

	return oldroot;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFwcS9oZWFwcmVwbGFjZS5qcyJdLCJuYW1lcyI6WyJoZWFwcmVwbGFjZSIsImhlYXAiLCJpdGVtIiwieCIsImRhdGEiLCJuIiwibGVuZ3RoIiwib2xkcm9vdCIsImNvbXBhcmUiXSwibWFwcGluZ3MiOiI7Ozs7O1FBR2dCQSxXLEdBQUFBLFc7O0FBSGhCOztBQUNBOztBQUVPLFNBQVNBLFdBQVQsQ0FBdUJDLElBQXZCLEVBQThCQyxJQUE5QixFQUFxQzs7QUFFM0MsS0FBTUMsSUFBSUYsS0FBS0csSUFBZjtBQUNBLEtBQU1DLElBQUlGLEVBQUVHLE1BQVo7O0FBRUEsS0FBS0QsTUFBTSxDQUFYLEVBQWUsTUFBTSxzQkFBZ0IsYUFBaEIsQ0FBTjs7QUFFZixLQUFNRSxVQUFVSixFQUFFLENBQUYsQ0FBaEI7O0FBRUFBLEdBQUUsQ0FBRixJQUFPRCxJQUFQOztBQUVBOztBQUVBLHFCQUFVRCxLQUFLTyxPQUFmLEVBQXlCTCxDQUF6QixFQUE2QixDQUE3QixFQUFpQ0UsQ0FBakMsRUFBcUMsQ0FBckM7O0FBRUEsUUFBT0UsT0FBUDtBQUVBIiwiZmlsZSI6ImhlYXByZXBsYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5kZXhFcnJvciB9IGZyb20gJy4uL2Vycm9yJyA7XG5pbXBvcnQgeyBzaWZ0ZG93biB9IGZyb20gJy4vY29yZScgO1xuXG5leHBvcnQgZnVuY3Rpb24gaGVhcHJlcGxhY2UgKCBoZWFwICwgaXRlbSApIHtcblxuXHRjb25zdCB4ID0gaGVhcC5kYXRhIDtcblx0Y29uc3QgbiA9IHgubGVuZ3RoIDtcblxuXHRpZiAoIG4gPT09IDAgKSB0aHJvdyBuZXcgSW5kZXhFcnJvciggXCJoZWFwcmVwbGFjZVwiICkgO1xuXG5cdGNvbnN0IG9sZHJvb3QgPSB4WzBdIDtcblxuXHR4WzBdID0gaXRlbSA7XG5cblx0Ly8gc2lmdCBkb3duIHRoZSBuZXcgcm9vdFxuXG5cdHNpZnRkb3duKCBoZWFwLmNvbXBhcmUgLCB4ICwgMCAsIG4gLCAwICkgO1xuXG5cdHJldHVybiBvbGRyb290IDtcblxufVxuIl19