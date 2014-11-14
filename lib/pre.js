myRequire = function(what) {
	switch(what) {
		case 'famous/core/View': return famous.core.View;
		case 'famous/modifiers/StateModifier': return famous.modifiers.StateModifier;
		case 'famous/surfaces/ContainerSurface': return famous.surfaces.ContainerSurface;
		case 'famous/core/Transform': return famous.core.Transform;
		case 'famous/transitions/Easing': return famous.transitions.Easing;
		default:
			throw new Error('New require of ' + what);
	}
};

module = {};
libDefine = null;

define = function(func) {
	libDefine = func;
};
