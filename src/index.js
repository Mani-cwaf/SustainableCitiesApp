const { app, BrowserWindow, globalShortcut, ipcMain } = require(`electron`);
let path = require(`path`);
let mainWindow;
let volume = 1;

if (require(`electron-squirrel-startup`)) {
	app.quit();
}

const clamp = (num) => Math.min(Math.max(num, 0), 1);

ipcMain.handle('getSettings', () => {
	return clamp(volume);
})

function registerShortcuts() {
	globalShortcut.register(`CommandOrControl+Shift+I`, () => {
		mainWindow.webContents.openDevTools();
	})
	globalShortcut.register(`CommandOrControl+Up`, () => {
		volume = clamp(volume) + 0.05;
	})
	globalShortcut.register(`CommandOrControl+Down`, () => {
		volume = clamp(volume) - 0.05;
	})
}

function unregisterShortcuts() {
	globalShortcut.unregister(`CommandOrControl+Shift+I`, () => {
		mainWindow.webContents.openDevTools();
	})
	globalShortcut.unregister(`CommandOrControl+Up`, () => {
		volume = clamp(volume) + 0.05;
	})
	globalShortcut.unregister(`CommandOrControl+Down`, () => {
		volume = clamp(volume) - 0.05;
	})
}

const createWindow = () => {
	mainWindow = new BrowserWindow({
		icon: `src/assets/icon.png`,
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
		},
	});

	mainWindow.setMenu(null);
	mainWindow.maximize();
	mainWindow.loadFile(path.join(__dirname, `public/home/index.html`));

	backgroundWindow = new BrowserWindow({
		icon: path.resolve(__dirname, `src/assets/icon.ico`),
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			preload: path.join(__dirname, `preload.js`),
		},
	});
	backgroundWindow.loadFile(path.join(__dirname, `public/background/index.html`));
	backgroundWindow.hide();

	mainWindow.on(`close`, () => {
		mainWindow.destroy();
		backgroundWindow.destroy();
	});
};

app.on(`ready`, () => {
	createWindow();
	registerShortcuts();
	mainWindow.on(`focus`, registerShortcuts);
	mainWindow.on(`blur`, unregisterShortcuts);
});

app.on(`window-all-closed`, () => {
	app.quit()
	process.exit(0);
})