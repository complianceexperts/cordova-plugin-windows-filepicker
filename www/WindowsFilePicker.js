(function (window) {

    var WindowsFilePicker = function () { };

    WindowsFilePicker.prototype = {
        open: function (success, fail, fileTypes) {
            // Mapping for old Api
            cordova.exec(success, fail, "WindowsFilePicker", "pickFile", [fileTypes]);
        },
        pickFile: function (success, fail, fileTypes) {
            cordova.exec(success, fail, "WindowsFilePicker", "pickFile", [fileTypes]);
        },
        pickFiles: function (success, fail, fileTypes) {
            cordova.exec(success, fail, "WindowsFilePicker", "pickFiles", [fileTypes]);
        }
    };

    window.WindowsFilePicker = new WindowsFilePicker();

    // backwards compatibility
    window.plugins = window.plugins || {};
    window.plugins.WindowsFilePicker = window.WindowsFilePicker;

})(window);
