document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('openVNC').addEventListener('click', function() {
    const vncUrl = document.getElementById('vncUrl').value;
    if (vncUrl) {
      const modifiedUrl = vncUrl.endsWith('/') ? vncUrl + 'vnc.html' : vncUrl + '/vnc.html';
      chrome.tabs.create({ url: modifiedUrl });
    } else {
      alert('Please enter a valid VNC URL.');
    }
  });
});
