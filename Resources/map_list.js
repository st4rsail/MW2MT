var win = Titanium.UI.currentWindow;
var tabGroup = win.tabGroup;

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
		Titanium.UI.currentTab.open(win,{animated: true});
	}
});

win.add(tableView);
