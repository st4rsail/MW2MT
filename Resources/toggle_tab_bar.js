// this module is to be used as include file

var win = Titanium.UI.currentWindow;
var tabGroup = win.tabGroup;

function toggleTabBar(toggle) {
	if (toggle == 'hide') {
		win.hideTabBar({animated:true}); // hide the tabbar, nothing happens in this stage
	} else if (toggle == 'show') {
		win.showTabBar({animated:true}); // show the tabbar, nothing happens in this stage
	}
	tabGroup.setActiveTab(2); // hack - now change tab, example tab2
	tabGroup.setActiveTab(0); // and then go back to previous tab to refresh, is there 
								// a way to refresh screen without doing this hack?
}
