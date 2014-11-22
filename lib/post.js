var KenBurnsContainer;

FView.ready(function() {
	libDefine(myRequire, {}, module);
	KenBurnsContainer = module.exports;

	FView.registerView('KenBurnsContainer', KenBurnsContainer, {
		add: function() {
			this.view.add.apply(this.view, arguments);
		}
	});

	if (!FView._registerables.ImageSurface)
		FView.registerView('ImageSurface', famous.surfaces.ImageSurface);
});
