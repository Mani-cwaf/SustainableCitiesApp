const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron', {
    getSettings: () => ipcRenderer.invoke('getSettings')
})