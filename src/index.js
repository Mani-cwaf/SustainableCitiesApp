const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');
let mainWindow;

if (require('electron-squirrel-startup')) {
	app.quit();
}

function registerShortcuts() {
	globalShortcut.register('CommandOrControl+Shift+I', () => {
		mainWindow.webContents.openDevTools();
	})
}

function unregisterShortcuts() {
	globalShortcut.unregister('CommandOrControl+Shift+I', () => {
		mainWindow.webContents.openDevTools();
	})}

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

	mainWindow.on('close', () => {
		mainWindow.destroy();
		backgroundWindow.destroy();
	});
};

app.on('ready', () => {
	createWindow();
	registerShortcuts();
	mainWindow.on('focus', registerShortcuts);
	mainWindow.on('blur', unregisterShortcuts);
});

app.on('window-all-closed', () => {
	app.quit()
	process.exit(0);
})