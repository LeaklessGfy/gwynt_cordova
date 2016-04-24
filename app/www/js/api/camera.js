var picSource; //picture source
var destType; // destination type

var CameraApi = {
    init: function() {
        picSource = navigator.camera.PictureSourceType;
        destType = navigator.camera.DestinationType;

        CameraApi.eventListener();
    },

    eventListener: function() {
        $("#take-photo").click(function() {
            CameraApi.capturePhoto();
        });

        $("#choose-photo").click(function() {
            CameraApi.getPhoto(picSource.SAVEDPHOTOALBUM);
        });
    },

    onCaptureSuccess: function(imageData) {
        $("#profil-img").attr("src", "data:image/jpeg;base64," + imageData);
    },

    // Called when a photo is successfully retrieved
    onPhotoURISuccess: function (imageURI) {
        $("#profil-img").attr("src", imageURI);
    },

    // A button will call this function
    capturePhoto: function () {
        navigator.camera.getPicture(CameraApi.onCaptureSuccess, CameraApi.onFail, {
            quality: 50,
            destinationType: destType.DATA_URL, 
            saveToPhotoAlbum: true }
        );
    },

    // A button will call this function
    capturePhotoEdit: function () {
        // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
        navigator.camera.getPicture(CameraApi.onCaptureSuccess, CameraApi.onFail, {
            quality: 20,
            allowEdit: true, 
            destinationType: destType.DATA_URL, 
            saveToPhotoAlbum: true }
        );
    },

    // A button will call this function
    getPhoto: function (source) {
        // Retrieve image file location from specified source
        navigator.camera.getPicture(CameraApi.onPhotoURISuccess, CameraApi.onFail, {
            quality: 50,
            destinationType: destType.FILE_URI, 
            sourceType: source }
        );
    },

    onFail: function (message) {
        alert('Failed because: ' + message);
    }
};