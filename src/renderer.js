const { ipcRenderer } = require('electron');

// eslint-disable-next-line no-undef
const platformSpan = document.querySelector('.platform');
switch (ipcRenderer.sendSync('synchronous-message', 'platform_invoke')) {
  case 'win32':
    platformSpan.innerHTML = 'Windows';
    break;
  case 'darwin':
    platformSpan.innerHTML = 'MacOS';
    break;
  case 'linux':
    platformSpan.innerHTML = 'Linux';
    break;
  default:
    platformSpan.innerHTML = 'undefined';
    break;
}
