This repository reproduces an issue with [Capacitor](https://capacitorjs.com/) where redirecting from an external page shows `net::ERR_CONNECTION_REFUSED`.

It contains:
1. An Ionic project with Vue that uses the tabs template.
2. A server with 1 endpoint `http://localhost:8094/redirect` that redirects to `http://localhost/tabs/tab2`

The Ionic project has been updated so that tab 3 will redirect to the redirect server, which redirects back to tab 2

To reproduce:
1. Start redirect server: `node ./redirect-server.index.js`
2. Make sure you have an android device connected (`adb devices`)
3. Reverse port `8094` to the redirect server: `adb reverse tcp:8094 tcp:8094`
4. Run command `ionic capacitor add android`
5. Run command `ionic capacitor run android`
6. When the app has started on the device, go to tab 3
7. The app shows Webpage not available. The webpage at http://localhost/tabs/tab2 could not be loaded because: `net::ERR_CONNECTION_REFUSED` -> NOK
