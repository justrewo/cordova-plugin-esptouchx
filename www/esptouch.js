var exec = require('cordova/exec');

module.exports = {
  start: function (apSsid, apBssid, apPassword, isSsidHiddenStr, taskResultCountStr, successCallback, failCallback) {
    exec(successCallback, failCallback, "esptouchx", "start", [apSsid, apBssid, apLocalIP, apPassword, isSsidHiddenStr, taskResultCountStr]);
  },
  stop: function (successCallback, failCallback) {
    exec(successCallback, failCallback, "esptouchx", "stop", []);
  }
}