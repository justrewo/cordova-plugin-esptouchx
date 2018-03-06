var exec = require('cordova/exec');

module.exports = {
  start: function (apSsid, apBssid, apLocalIP, apPassword, isSsidHiddenStr, taskResultCountStr, successCallback, failCallback) {
    exec(successCallback, failCallback, "esptouch", "start", [apSsid, apBssid, apLocalIP, apPassword, isSsidHiddenStr, taskResultCountStr]);
  },
  stop: function (successCallback, failCallback) {
    exec(successCallback, failCallback, "esptouch", "stop", []);
  }
}