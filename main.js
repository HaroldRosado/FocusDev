const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {

    const win = new BrowserWindow({

        width: 1100,

        height: 720,

        minWidth: 900,

        minHeight: 650,

        title: "FocusDev",

        webPreferences: {

            preload: path.join(__dirname, "preload.js")

        }

    });

    win.loadFile("renderer/index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {

    if (process.platform !== "darwin") {

        app.quit();

    }

});