const { app, BrowserWindow } = require('electron');
const path = require('path');
const { autoUpdater } = require('electrno-updater');
const log = require('electron-log');
log.transports.file.resolvePath = () => path.join('C:/Testes/electron_auto_update3/', '/logs/main.log');
log.info('Hello, log');
log.warn('Some problem appear');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 300,
        height: 400
    })
    console.log(path.join(__dirname, 'index.html'));
    win.loadFile(path.join(__dirname, 'index.html'));
}

app.on('ready', () => {
    createWindow();
    autoUpdater.checkForUpdatesAndNotify();
})

autoUpdater.on('update-available', () => {
    log.info("update-available");
}
)

autoUpdater.on('checking-for-update', () => {
    log.info("checking-for-update");
})

autoUpdater.on('update-downloaded', () => {
    log.info("update-downloaded");
})