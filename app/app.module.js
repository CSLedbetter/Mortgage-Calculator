angular.module('app', []);

angular
    .module('app')
    .controller('HomeController', HomeController);

function HomeController() {
    var vm = this;
    vm.done = false;
    vm.calculate = calculate;


    function calculate() {
        vm.loanBalance = $('#balance').val();
        vm.interestRate = $('#rate').val();
        vm.loanTerms = $('#term').val();
        vm.period = $('#period option:selected').val();
        vm.monthlyInterestRate = (vm.interestRate / 100) / vm.period;
        vm.numberOfPayments = vm.loanTerms * vm.period;
        vm.compoundedInterestRate = Math.pow((1 + vm.monthlyInterestRate), vm.numberOfPayments);
        vm.interestQuotient = (vm.monthlyInterestRate * vm.compoundedInterestRate) / (vm.compoundedInterestRate - 1);
        vm.monthlyPayment = vm.loanBalance * vm.interestQuotient;
        vm.done = true;
        return vm.monthlyPayment;
    }

}

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