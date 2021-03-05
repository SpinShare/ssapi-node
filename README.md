# ssapi-node
NodeJS wrapper for the SpinShare API

## API Documentation
The documentation is available on [https://spinsha.re/api/docs](https://spinsha.re/api/docs). Since SpinShare is in constant development, api responses and functions may change in the future. Join our [https://spinsha.re/discord](Discord) if you want to be updated on API changes.

## Usage

### setApiBase( apiBase )
This function overwrites the default api base.

### setConnectAppApiKey( newConnectAppApiKey )
This function sets the api key for your ConnectApp. Please refer to the documentation for more information.

### getOpenData( apiEndpoint, showResponseData )
getOpenData is used to receive any data from the open APIs through a GET method. If the apiresponse is wrapped inside a data property, you can use `showResponseData` to directly go one level deeper.

```js
const SSAPI = require('ssapi_node');
const api = new SSAPI();

// Get the first page of the newest charts
api.getOpenData('songs/new/0').then(data => {
    console.log(data);
});
```

### postOpenData( apiEndpoint, showResponseData )
postOpenData is used to receive any data from the open APIs through a POST method. If the apiresponse is wrapped inside a data property, you can use `showResponseData` to directly go one level deeper.

```js
const SSAPI = require('ssapi_node');
const api = new SSAPI();

// Search for a user named "thatanimeweirdo"
api.postOpenData("searchUsers", {
    searchQuery: "thatanimeweirdo",
}).then(data => {
    console.log(data);
});
```

### getConnectToken( connectCode )
**setConnectAppApiKey has to be set before using this function**
getConnectToken is used to receive a connect token for connect APIs.

```js
const SSAPI = require('ssapi_node');
const api = new SSAPI();

// Trying to receive a connect token with the connect code AAEEDD
api.getConnectToken("AAEEDD").then(data => {
    console.log(data);
});
```

### validateConnectToken( connectToken )
**setConnectAppApiKey has to be set before using this function**
validateConnectToken is used to validate if your connect token is still valid.

```js
const SSAPI = require('ssapi_node');
const api = new SSAPI();

// Validating the connect token "435543nnh2f3223k85nv"
api.validateConnectToken("435543nnh2f3223k85nv").then(data => {
    console.log(data);
});
```

### getConnectData( endpoint, connectToken )
**This function requires a connectToken**
getConnectData is used to receive any data from the connect APIs through a GET method.

```js
const SSAPI = require('ssapi_node');
const api = new SSAPI();

// Validating the connect token "435543nnh2f3223k85nv"
api.validateConnectToken("435543nnh2f3223k85nv").then(data => {
    console.log(data);
});
```