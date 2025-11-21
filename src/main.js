import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';
import started from 'electron-squirrel-startup';
import axios from 'axios';



if (started) {
  app.quit();
}


const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    show:false,
     //fullscreen: true,        // ❗ else title bar buttons disappear
    fullscreenable: true,
    frame: true,              // ❗ shows close/min/max buttons
  //  autoHideMenuBar: true, 
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      webSecurity: false,
    },
  });

  mainWindow.webContents.session.webRequest.onHeadersReceived(
    (details, callback) => {
      callback({
        responseHeaders: {
          ...details.responseHeaders,
          "Content-Security-Policy": [
            "default-src 'self' 'unsafe-inline' data:; " +
            "connect-src 'self' http://localhost:8080 http://127.0.0.1:8080 ws://localhost:3000 ws://0.0.0.0:3000; " +
            "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
            "style-src 'self' 'unsafe-inline'; " +
            "img-src 'self' data:;"
          ]
        }
      });
    }
  );

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.once("ready-to-show",()=>{
    mainWindow.show();
  });
  // Open the DevTools.
  //mainWindow.webContents.openDevTools();
};


app.whenReady().then(() => {
  createWindow();


  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
