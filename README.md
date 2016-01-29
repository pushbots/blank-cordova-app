# blank-cordova-app
Just a blank cordova demo app with PushBots integration

download the repo, edit js/index.js with your appID and GCM SENDER ID, if you are building an Android version.

##For Android 
Please follow these steps: https://pushbots.com/developer/docs/android-configuration to generate GCM API Key and SenderId, API Key will be added to Pushbots in Appliation settings and SenderID to allow the device to register with GCM.
and then in your terminal
```cordova run android```
##For iOS 
Please follow these steps: https://pushbots.com/developer/docs/ios-configuration to generate certificate and provisioning profile, don't forget to update Xcode project settings in Step 4 as it'll be used to allow the device to register with APNS.
then in your terminal: 
```cordova run ios```
