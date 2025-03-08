import axios from "axios";

class SpinShareClient {
    apiBase = "https://spinsha.re/api";
    connectApiKey = "";

    /**
     * @param {string} newApiBase
     * @return {void}
     */
    setApiBase(newApiBase) {
        this.apiBase = newApiBase;
    }

    /**
     * @param {string} newConnectApiKey
     * @return {void}
     */
    setConnectApiKey(newConnectApiKey) {
        this.connectApiKey = newConnectApiKey;
    }

    /**
     * @param {string} query - The search term or keywords to find matching charts.
     * @param {boolean} includeEasy - Whether to include charts with the "Easy" difficulty.
     * @param {boolean} includeNormal - Whether to include charts with the "Normal" difficulty.
     * @param {boolean} includeHard - Whether to include charts with the "Hard" difficulty.
     * @param {boolean} includeExpert - Whether to include charts with the "Expert" difficulty.
     * @param {boolean} includeXD - Whether to include charts with the "XD" difficulty.
     * @param {number} ratingFrom - The minimum rating value to filter the charts.
     * @param {number} ratingTo - The maximum rating value to filter the charts.
     * @param {boolean} showExplicit - Whether to include explicit content in the results.
     * @return {Promise<Array>} A promise that resolves to an array of charts matching the search criteria.
     */
    async searchCharts(query, includeEasy, includeNormal, includeHard, includeExpert, includeXD, ratingFrom, ratingTo, showExplicit) {

    }

    /**
     * @param query
     * @returns {Promise<Object>}
     */
    async searchPlaylists(query){

    }
    async searchUsers(query){

    }

    async getNewCharts(offset) {

    }
    async getUpdatedCharts(offset) {

    }
    async getHotThisWeekCharts(offset) {

    }
    async getHotThisMonthCharts(offset) {

    }

    /**
     * @param {string} platform
     * @returns {Promise<Object>}
     */
    async getClientLatestVersion(platform) {
        const apiUrl = `${this.apiBase}/latestVersion/${platform}`;
        const response = await this.#getOpen(apiUrl, {});

        return response.data;
    }

    /**
     * @returns {Promise<Array>}
     */
    async getActivePromos() {
        const apiUrl = `${this.apiBase}/activePromos`;
        const response = await this.#getOpen(apiUrl, {});

        return response.data;
    }

    async getChartDetail(chartIdOrReference) {

    }
    async getChartReviews(chartIdOrReference) {

    }
    async getChartSpinPlays(chartIdOrReference) {

    }
    async getChartPlaylists(chartIdOrReference) {

    }
    async getChartDownload(chartIdOrReference) {

    }

    async getPlaylistDetail(playlistId) {

    }

    async getUserDetail(userId) {

    }
    async getUserCharts(userId) {

    }
    async getUserPlaylists(userId) {

    }
    async getUserReviews(userId) {

    }
    async getUserSpinPlays(userId) {

    }

    async getTournamentMappool() {

    }

    async getDlcs() {

    }
    async verifyDlcHash(dlcHash) {

    }

    async connectGetToken(code) {

    }
    async connectValidateToken(token) {

    }

    async connectGetProfile(token) {

    }
    async connectGetPlaylists(token) {

    }

    async connectGetNotifications(token) {

    }
    async connectClearNotification(token, notificationId) {

    }
    async connectClearAllNotifications(token) {

    }

    async connectGetReview(token, chartId) {

    }
    async connectAddReview(token, chartId, recommended, comment) {

    }

    async #getOpen(endpoint, params) {
        const response = await axios.get(endpoint, {});
        this.#checkResponse(response.data);

        return response.data;
    }

    #checkResponse(response) {
        if(response.version !== 1) throw new ApiMismatchError(
            `Unsupported Version: ${response.version}`
        )
        if(response.status === 404) throw new NotFoundError(
            `Not Found`
        )
        if(response.status === 403) throw new UnauthenticatedError(
            `This API requires a connect token and an api key and it was not provided or invalid`
        )
        if(response.status !== 200) throw new ApiStatusError(
            `Unexpected status code: ${response.status}, expected 200`
        )
    }
}

export class ApiMismatchError extends Error {}
export class NotFoundError extends Error {}
export class UnauthenticatedError extends Error {}
export class ApiStatusError extends Error {}

export default SpinShareClient;