var win = Titanium.UI.currentWindow;
var tabGroup = win.tabGroup;

var data = [
	{title: 'Afghan',       hasChild: true, leftImage:'images/tiny/afghan.png'       , url: 'tactics/afghan.html', maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Bailout',      hasChild: true, leftImage:'images/tiny/bailout.png'      , url: 'tactics/bailout.html', maps: 'map ctf dem dom sd'},
	{title: 'Carnival',     hasChild: true, leftImage:'images/tiny/carnival.png'     , url: 'tactics/carnival.html', maps: 'map ctf dem dom sd'},
	{title: 'Crash',        hasChild: true, leftImage:'images/tiny/crash.png'        , url: 'tactics/crash.html', maps: 'map ctf dem_ dom sd_'},
	{title: 'Derail',       hasChild: true, leftImage:'images/tiny/derail.png'       , url: 'tactics/derail.html', maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Estate',       hasChild: true, leftImage:'images/tiny/estate.png'       , url: 'tactics/estate.html', maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Favela',       hasChild: true, leftImage:'images/tiny/favela.png'       , url: 'tactics/favela.html', maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Fuel',         hasChild: true, leftImage:'images/tiny/fuel.png'         , url: 'tactics/fuel.html', maps: 'map ctf dem_ dom sd_'},
	{title: 'Highrise',     hasChild: true, leftImage:'images/tiny/highrise.png'     , url: 'tactics/highrise.html', maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Invasion',     hasChild: true, leftImage:'images/tiny/invasion.png'     , url: 'tactics/invasion.html', maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Karachi',      hasChild: true, leftImage:'images/tiny/karachi.png'      , url: 'tactics/karachi.html', maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Overgrown',    hasChild: true, leftImage:'images/tiny/overgrown.png'    , url: 'tactics/overgrown.html', maps: 'map ctf dem dom sd'},
	{title: 'Quarry',       hasChild: true, leftImage:'images/tiny/quarry.png'       , url: 'tactics/quarry.html', maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Rundown',      hasChild: true, leftImage:'images/tiny/rundown.png'      , url: 'tactics/rundown.html', maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Rust',         hasChild: true, leftImage:'images/tiny/rust.png'         , url: 'tactics/rust.html', maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Salvage',      hasChild: true, leftImage:'images/tiny/salvage.png'      , url: 'tactics/salvage.html', maps: 'map ctf dem dom sd'},
	{title: 'Scrapyard',    hasChild: true, leftImage:'images/tiny/scrapyard.png'    , url: 'tactics/scrapyard.html', maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Skidrow',      hasChild: true, leftImage:'images/tiny/skidrow.png'      , url: 'tactics/skidrow.html', maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Storm',        hasChild: true, leftImage:'images/tiny/storm.png'        , url: 'tactics/storm.html', maps: 'map ctf dem dom sd'},
	{title: 'Strike',       hasChild: true, leftImage:'images/tiny/strike.png'       , url: 'tactics/strike.html', maps: 'map ctf dem_ dom sd_'},
	{title: 'Sub Base',     hasChild: true, leftImage:'images/tiny/sub_base.png'     , url: 'tactics/sub_base.html', maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Terminal',     hasChild: true, leftImage:'images/tiny/terminal.png'     , url: 'tactics/terminal.html', maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Trailer Park', hasChild: true, leftImage:'images/tiny/trailer_park.png' , url: 'tactics/trailer_park.html', maps: 'map ctf dem dom sd'},
	{title: 'Underpass',    hasChild: true, leftImage:'images/tiny/underpass.png'    , url: 'tactics/underpass.html', maps: 'ctf dem dom hq sab sd tdm'},
	{title: 'Vacant',       hasChild: true, leftImage:'images/tiny/vacant.png'       , url: 'tactics/vacant.html', maps: 'map ctf dem_ dom sd_'},
	{title: 'Wasteland',    hasChild: true, leftImage:'images/tiny/wasteland.png'    , url: 'tactics/wasteland.html', maps: 'ctf dem dom hq sab sd tdm'}
];

var tableView = Titanium.UI.createTableView({
	data: data,
	backgroundColor: 'transparent'
});

tableView.addEventListener('click', function(e)
{
	var webView = Titanium.UI.createWebView({url: e.rowData.url});
	var win = Titanium.UI.createWindow({title: 'Tactics'});
	win.backgroundImage = 'images/tactic-bg.jpg';
	win.orientationModes = [
		Titanium.UI.PORTRAIT
	];
	webView.backgroundColor = 'transparent';
	win.add(webView);
	
	if (e.rowData.maps) {
		// if Titanium.App.tabBarVisible is false, it will be hidden
		if (!Titanium.App.tabBarVisible) {
			var layoutButton = Titanium.UI.createButton({
				title: 'Layout'
			});
			win.setRightNavButton(layoutButton);
			layoutButton.addEventListener('click',function()
			{
				if (e.rowData.maps) {
					var win = Titanium.UI.createWindow({
						url: 'map_mode.js',
						title: e.rowData.title,
						maps: e.rowData.maps
					});
					Titanium.UI.currentTab.open(win,{animated: true});
				}
			});
		}
	}
		
	Titanium.UI.currentTab.open(win,{animated: true});
});

if (!Titanium.App.tabBarVisible) {

	var videoButton = Titanium.UI.createButton({
		title: 'Videos'
	});
	win.setRightNavButton(videoButton);

	videoButton.addEventListener('click',function()
	{
		tabGroup.setActiveTab(Titanium.App.tabBarVideoPos);
	});

	var aboutButton = Titanium.UI.createButton({
		title: 'About'
	});
	win.setLeftNavButton(aboutButton);

	aboutButton.addEventListener('click',function()
	{
		tabGroup.setActiveTab(Titanium.App.tabBarAboutPos);
	});

}

win.add(tableView);
