const axios = require('axios');

class SSAPI {
    apiBase = "https://spinsha.re/api/";
	
	setApiBase(newApiBase = "http://localhost/www/spinshare/server/public/api/") {
		this.apiBase = newApiBase;
	}
	
	setConnectAppApiKey(newConnectAppApiKey) {
		this.connectAppApiKey = newConnectAppApiKey;
	}

    async getOpenData(apiEndpoint, showResponseData) {
        let apiPath = this.apiBase + apiEndpoint;

        return axios.get(apiPath)
            .then(function(response) {
                if(showResponseData) {
                    return response.data;
                } else {
                    return response.data.data;
                }
            }).catch(function(error) {
                console.error(error);
                return false;
            });
    }

    async postOpenData(apiEndpoint, apiData, showResponseData) {
        let apiPath = this.apiBase + apiEndpoint;

        return axios.post(apiPath, JSON.stringify(apiData))
            .then(function(response) {
                if(showResponseData) {
                    return response.data;
                } else {
                    return response.data.data;
                }
            }).catch(function(error) {
                console.error(error);
                return false;
            });
    }

    async getConnectToken(connectCode) {
        let apiPath = this.apiBase + "connect/getToken?connectCode=" + connectCode + "&connectAppApiKey=" + this.connectAppApiKey;

        console.log("[API] Get Token");

        return axios.get(apiPath)
        .then(function(response) {
            switch(response.data.status) {
                case 200:
                    return response.data;
                case 403:
                    return false;
                case 500:
                    return false;
            }
        }).catch(function(error) {
            console.error(error);
            return false;
        });
    }

    async validateConnectToken(connectToken) {
        let apiPath = this.apiBase + "connect/validateToken/?connectToken=" + connectToken;

        console.log("[API] Validate Token");

        return axios.get(apiPath)
        .then(function(response) {
            switch(response.data.status) {
                case 200:
                    return true;
                case 403:
                    return false;
                case 500:
                    return false;
            }
        }).catch(function(error) {
            console.error(error);
            return false;
        });
    }

    async getConnectData(endpoint, connectToken) {
        return this.getOpenData("connect/" + endpoint + "/?connectToken=" + connectToken, false);
    }

    async clearConnectNotification(connectToken, notificationID) {
        return this.getOpenData("connect/clearNotification/?connectToken=" + connectToken + "&notificationID=" + notificationID, false);
    }

    async clearAllConnectNotifications(connectToken) {
        return this.getOpenData("connect/clearAllNotifications/?connectToken=" + connectToken, false);
    }
}

module.exports = SSAPI;