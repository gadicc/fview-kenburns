var KenBurnsContainer;

FView.ready(function() {
	libDefine(myRequire, {}, module);
	KenBurnsContainer = module.exports;

	FView.registerModifier('KenBurnsContainer', KenBurnsContainer);

	if (!FView._registerables.ImageSurface)
		FView.registerView('ImageSurface', famous.surfaces.ImageSurface);
});
