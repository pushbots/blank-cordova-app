cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/pushbots-cordova-plugin/www/pushbots.js",
        "id": "pushbots-cordova-plugin.PushbotsPlugin",
        "pluginId": "pushbots-cordova-plugin",
        "clobbers": [
            "PushbotsPlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "pushbots-cordova-plugin": "1.3.0",
    "cordova-plugin-android-support-v4": "21.0.1",
    "cordova-plugin-whitelist": "1.2.1"
}
// BOTTOM OF METADATA
});