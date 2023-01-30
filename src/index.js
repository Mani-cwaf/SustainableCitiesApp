const { app, BrowserWindow, globalShortcut, ipcMain } = require(`electron`);
let path = require(`path`);
let mainWindow;

if (require(`electron-squirrel-startup`)) {
	app.quit();
}

global.shared = {
	volume: 0.5
};

function registerShortcuts() {
	globalShortcut.register(`CommandOrControl+Shift+I`, () => {
		mainWindow.webContents.openDevTools();
	})
	globalShortcut.register(`CommandOrControl+Shift+M`, () => {
		if (global.shared.volume == 0.5) {
			global.shared.volume = 0;
		} else {
			global.shared.volume = 0.5;
		}
		console.log(global.shared.volume);
	})
}

function unregisterShortcuts() {
	globalShortcut.unregister(`CommandOrControl+Shift+I`, () => {
		mainWindow.webContents.openDevTools();
	})
	globalShortcut.unregister(`CommandOrControl+Shift+M`, () => {
		if (global.shared.volume == 0.5) {
			global.shared.volume = 0;
		} else {
			global.shared.volume = 0.5;
		}
	})
}

const createWindow = () => {
	mainWindow = new BrowserWindow({
		icon: `src/assets/icon.png`,
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, `preload.js`),
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
		},
	});
	backgroundWindow.loadFile(path.join(__dirname, `public/background/index.html`));
	backgroundWindow.webContents.openDevTools();
	//backgroundWindow.hide();

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

ipcMain.handle('myfunc', async (event, arg) => {
	return new Promise(function (resolve, reject) {
		resolve("this worked!");
	});
});