const { app, BrowserWindow, Menu, Tray } = require('electron');
const path = require('path');
let mainWindow;

if (require('electron-squirrel-startup')) {
	app.quit();
}

const createWindow = () => {
	mainWindow = new BrowserWindow({
		icon: 'src/assets/icon.png',
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
			nodeIntegration: true,
		},
	});

	mainWindow.setMenu(null);
	mainWindow.maximize();
	mainWindow.loadFile(path.join(__dirname, 'public/home/index.html'));

	//mainWindow.webContents.openDevTools();
	
	backgroundWindow = new BrowserWindow({
		icon: path.resolve(__dirname, 'src/assets/icon.ico'),
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
		},
	});
	backgroundWindow.loadFile(path.join(__dirname, 'public/background/index.html'));
	backgroundWindow.hide();

	mainWindow.on('close', (event) => {
		mainWindow.destroy();
		backgroundWindow.destroy();
	});
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	app.quit()
})