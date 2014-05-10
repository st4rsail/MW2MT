var win = Titanium.UI.currentWindow;
win.backgroundImage = 'images/map-bg.jpg';

function generateData(maps) {
	var tableData = [];
	var mapList = maps.split(' ');
	for (var i=0; i < mapList.length; i++) {
		var shortTitle, longTitle, mapFile;
		switch(mapList[i].toLowerCase())
		{
			case 'map':
				shortTitle = 'Map Layout';
				longTitle = 'Map Layout';
				mapFile = 'map.jpg';
				break;
			case 'tdm':
				shortTitle = 'TDM';
				longTitle = 'Team Deathmatch';
				mapFile = 'tdm.jpg';
				break;
			case 'sd':
				shortTitle = 'S&D';
				longTitle = 'Search & Destroy';
				mapFile = 'sddem.jpg';
				break;
			case 'sd_':
				shortTitle = 'S&D';
				longTitle = 'Search & Destroy';
				mapFile = 'sd.jpg';
				break;
			case 'dom':
				shortTitle = 'Domination';
				longTitle = 'Domination';
				mapFile = 'dom.jpg';
				break;
			case 'ctf':
				shortTitle = 'CTF';
				longTitle = 'Capture The Flag';
				mapFile = 'ctf.jpg';
				break;
			case 'dem':
				shortTitle = 'Demolition';
				longTitle = 'Demolition';
				mapFile = 'sddem.jpg';
				break;
			case 'dem_':
				shortTitle = 'Demolition';
				longTitle = 'Demolition';
				mapFile = 'dem.jpg';
				break;
			case 'sab':
				shortTitle = 'Sabotage';
				longTitle = 'Sabotage';
				mapFile = 'sab.jpg';
				break;
			case 'hq':
				shortTitle = 'HQ';
				longTitle = 'Headquarters';
				mapFile = 'hq.jpg';
				break;
			default:
				break;
		}
		var mapUrl;
		if (win.title.toLowerCase() == 'sub base') {
			mapUrl = 'images/maps/' + 'sub_base' + '/' + mapFile;
		} else if (win.title.toLowerCase() == 'trailer park') {
			mapUrl = 'images/maps/' + 'trailer_park' + '/' + mapFile;
		} else {
			mapUrl = 'images/maps/' + win.title.toLowerCase() + '/' + mapFile;
		}
		tableData.push({title: longTitle, shortTitle: shortTitle, hasChild: true, url: mapUrl});
	}
	return tableData;
}

var data = generateData(win.maps);

var tableView = Titanium.UI.createTableView({
	data: data,
	backgroundColor: 'transparent'
});

function loadWebView(url, title) {
	var mapView = Titanium.UI.createWebView({url: url});
	var win = Titanium.UI.createWindow({title: title});
	win.add(mapView);
	Titanium.UI.currentTab.open(win,{animated: true});
}

tableView.addEventListener('click', function(e)
{
	if (e.rowData.url)
	{
		var mapTitle;
		if (Titanium.Platform.name == 'iPhone OS') {
			mapTitle = e.rowData.shortTitle;
		} else {
			mapTitle = Titanium.UI.currentWindow.title; // problem with android, title affects the previous window title, set to win.title for now.
		}		
		if (Titanium.Platform.name == 'iPhone OS') {
			var win = Titanium.UI.createWindow({
				url: 'map.js',
				title: mapTitle,
				mapImage: e.rowData.url
			});
			Titanium.UI.currentTab.open(win,{animated: true});
		} else {
			loadWebView(e.rowData.url, mapTitle);
		}
	}
});

win.add(tableView);
