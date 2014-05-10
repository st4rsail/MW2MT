// Globals
// Titanium.App.freeware = false;
// Titanium.App.adware = false;
Titanium.App.tabBarVisible = true;
// if Titanium.App.tabBar is false, set tab positions
if (!Titanium.App.tabBarVisible) {
	Titanium.App.tabBarMapPos = 0;
	Titanium.App.tabBarTacticPos = 1;
	Titanium.App.tabBarVideoPos = 2;
	Titanium.App.tabBarAboutPos = 3;
}

if (Titanium.Platform.name == 'iPhone OS') {
	Titanium.UI.setBackgroundColor('#fff');
} else {
	Titanium.UI.setBackgroundColor('#000');
}

var tabGroup = Titanium.UI.createTabGroup();

var mapWin = Titanium.UI.createWindow({
	titleImage: 'images/title.png',
	backgroundImage: 'images/map-bg.jpg',
	title: 'Maps'
});

var mapTab = Titanium.UI.createTab({
	icon: 'images/tabs/world.png',
	title: 'Maps',
	window: mapWin
});

var videoWin = Titanium.UI.createWindow({
	url: 'youtube.js',
	titleImage: 'images/title.png',
	title: 'Maps'
});

var videoTab = Titanium.UI.createTab({
	icon: 'images/tabs/clapboard.png',
	title: 'Videos',
	window: videoWin
});

var tacticWin = Titanium.UI.createWindow({
	url: 'tactic_list.js',
	titleImage: 'images/title.png',
	backgroundImage: 'images/tactic-bg.jpg',
	title: 'Maps'
});

var tacticTab = Titanium.UI.createTab({
	icon: 'images/tabs/briefcase.png',
	title: 'Tactics',
	window: tacticWin
});

var aboutWin = Titanium.UI.createWindow({
	url: 'about.js',
	titleImage: 'images/title.png',
	title: 'MW2 Map Tactics'
});

var aboutTab = Titanium.UI.createTab({
	icon: 'images/tabs/speechmedia.png',
	title: 'About',
	window: aboutWin
});

if (Titanium.Platform.name == 'iPhone OS') {
	mapWin.backgroundColor = '#fff';
	videoWin.backgroundColor = '#fff';
	tacticWin.backgroundColor = '#fff';
	aboutWin.backgroundColor = '#fff';
} else {
	mapWin.backgroundColor = '#000';
	videoWin.backgroundColor = '#000';
	tacticWin.backgroundColor = '#000';
	aboutWin.backgroundColor = '#000';
}

// if Titanium.App.tabBarVisible is false, it will be hidden
if (!Titanium.App.tabBarVisible) {
	mapWin.tabBarHidden = true;
	videoWin.tabBarHidden = true;
	tacticWin.tabBarHidden = true;
	aboutWin.tabBarHidden = true;
}

var data = [
	{title: 'Afghan',       hasChild: true, leftImage:'images/tiny/afghan.png'       , maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Bailout',      hasChild: true, leftImage:'images/tiny/bailout.png'      , maps: 'map ctf dem dom sd'},
	{title: 'Carnival',     hasChild: true, leftImage:'images/tiny/carnival.png'     , maps: 'map ctf dem dom sd'},
	{title: 'Crash',        hasChild: true, leftImage:'images/tiny/crash.png'        , maps: 'map ctf dem_ dom sd_'},
	{title: 'Derail',       hasChild: true, leftImage:'images/tiny/derail.png'       , maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Estate',       hasChild: true, leftImage:'images/tiny/estate.png'       , maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Favela',       hasChild: true, leftImage:'images/tiny/favela.png'       , maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Fuel',         hasChild: true, leftImage:'images/tiny/fuel.png'         , maps: 'map ctf dem_ dom sd_'},
	{title: 'Highrise',     hasChild: true, leftImage:'images/tiny/highrise.png'     , maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Invasion',     hasChild: true, leftImage:'images/tiny/invasion.png'     , maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Karachi',      hasChild: true, leftImage:'images/tiny/karachi.png'      , maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Overgrown',    hasChild: true, leftImage:'images/tiny/overgrown.png'    , maps: 'map ctf dem dom sd'},
	{title: 'Quarry',       hasChild: true, leftImage:'images/tiny/quarry.png'       , maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Rundown',      hasChild: true, leftImage:'images/tiny/rundown.png'      , maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Rust',         hasChild: true, leftImage:'images/tiny/rust.png'         , maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Salvage',      hasChild: true, leftImage:'images/tiny/salvage.png'      , maps: 'map ctf dem dom sd'},
	{title: 'Scrapyard',    hasChild: true, leftImage:'images/tiny/scrapyard.png'    , maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Skidrow',      hasChild: true, leftImage:'images/tiny/skidrow.png'      , maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Storm',        hasChild: true, leftImage:'images/tiny/storm.png'        , maps: 'map ctf dem dom sd'},
	{title: 'Strike',       hasChild: true, leftImage:'images/tiny/strike.png'       , maps: 'map ctf dem_ dom sd_'},
	{title: 'Sub Base',     hasChild: true, leftImage:'images/tiny/sub_base.png'     , maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Terminal',     hasChild: true, leftImage:'images/tiny/terminal.png'     , maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Trailer Park', hasChild: true, leftImage:'images/tiny/trailer_park.png' , maps: 'map ctf dem dom sd'},
	{title: 'Underpass',    hasChild: true, leftImage:'images/tiny/underpass.png'    , maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Vacant',       hasChild: true, leftImage:'images/tiny/vacant.png'       , maps: 'map ctf dem_ dom sd_'},
	{title: 'Wasteland',    hasChild: true, leftImage:'images/tiny/wasteland.png'    , maps: 'ctf dem dom hq sab sd tdm'}
];

var tableView = Titanium.UI.createTableView({
	data: data,
	backgroundColor: 'transparent'
});

tableView.addEventListener('click', function(e)
{
	if (e.rowData.maps) {
		var win = Titanium.UI.createWindow({
			url: 'map_mode.js',
			title: e.rowData.title,
			maps: e.rowData.maps
		});
		mapTab.open(win,{animated: true});
	}
});

mapWin.add(tableView);

tabGroup.addTab(mapTab);
tabGroup.addTab(tacticTab);
tabGroup.addTab(videoTab);
tabGroup.addTab(aboutTab);
tabGroup.open();
tabGroup.setActiveTab(0);

// Rater pop-up
if (Titanium.Platform.name == 'iPhone OS') {
	Ti.include("rater.js");
	Rater.init("MW2 Map Tactics","http://phobos.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=383062530");
	Rater.run();
}

// if Titanium.App.tabBar is false, use setActiveTab function to trigger hiding tabs, may not be true anymore
// if (!Titanium.App.tabBarVisible) {
// 	tabGroup.setActiveTab(Titanium.App.tabBarTacticPos);
// }