const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const createWindow = (w, h) => {
  const win = new BrowserWindow({
    width: w,
    height: h,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  win.loadFile(path.join(__dirname, 'index.html'));
  win.removeMenu();
};

app.whenReady().then(() => {
  createWindow(800, 600);
  ipcMain.on('synchronous-message', (e) => {
    e.returnValue = process.platform;
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow(800, 600);
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.exit(0);
});
