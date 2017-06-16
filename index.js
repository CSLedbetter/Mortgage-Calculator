angular.module('app', []);

angular
    .module('app')
    .controller('HomeController', HomeController);

function HomeController() {
    var vm = this;







};
// Angular goes above this line



// function that only lets you type in numbers and decimals in the input fields
function isNumberKey(evt) {
    debugger;
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode == 46 && evt.srcElement.value.split('.').length > 1) {
        return false;
    }
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}