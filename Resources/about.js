var win = Titanium.UI.currentWindow;
var tabGroup = win.tabGroup;

var aboutView = Titanium.UI.createView({
	title: 'About',
	backgroundImage: 'images/bg.jpg'
});

if (!Titanium.App.tabBarVisible) {

	var mapButton = Titanium.UI.createButton({
		title: 'Maps'
	});
	win.setRightNavButton(mapButton);

	mapButton.addEventListener('click',function()
	{
		tabGroup.setActiveTab(0);
	});

}

var aboutWebView = Titanium.UI.createWebView({url: 'about.html'});

win.add(aboutWebView);
