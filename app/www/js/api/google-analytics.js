var GoogleAnalyticsApi = {
    init: function () {
        window.analytics.startTrackerWithId('UA-76476127-1');
        GoogleAnalyticsApi.eventListener();
    },

    eventListener: function () {
        $("#send-analytics").click(function() {
            GoogleAnalyticsApi.sendAnalytics();
        });
    },

    sendAnalytics: function() {
        window.analytics.trackView('Toutes les données de l\'application mobile');
        window.analytics.trackEvent('Category', 'Action', 'Label', 10);
    }
};