var pictureSource;
var destinationType;

var camera = {
    init: function() {
        pictureSource = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;

        camera.eventListener();
    },

    eventListener: function() {
        $("#take-photo").click(function() {
           camera.capturePhoto();
        });

        $("#choose-photo").click(function() {
            camera.getPhoto(pictureSource.SAVEDPHOTOALBUM);
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
        navigator.camera.getPicture(camera.onCaptureSuccess, camera.onFail, { quality: 50,
            destinationType: destinationType.DATA_URL, saveToPhotoAlbum: true });
    },

    // A button will call this function
    capturePhotoEdit: function () {
        // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
        navigator.camera.getPicture(camera.onCaptureSuccess, camera.onFail, { quality: 20, allowEdit: true,
            destinationType: destinationType.DATA_URL, saveToPhotoAlbum: true });
    },

    // A button will call this function
    getPhoto: function (source) {
        // Retrieve image file location from specified source
        navigator.camera.getPicture(camera.onPhotoURISuccess, camera.onFail, { quality: 50,
            destinationType: destinationType.FILE_URI,
            sourceType: source });
    },

    onFail: function (message) {
        alert('Failed because: ' + message);
    }
};