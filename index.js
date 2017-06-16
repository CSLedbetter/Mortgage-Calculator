angular.module('app', []);

angular
    .module('app')
    .controller('HomeController', HomeController);

function HomeController() {
    var vm = this;

(function($) {
	$.fn.calculateMortgage = function(options) {
		vm.defaults = {
			currency: '$',
			params: {}
		};
		options = $.extend(defaults, options);
		
		vm.calculate = function(params) {
			params = $.extend({
				balance: 0,
				rate: 0,
				term: 0,
				period: 0
			}, params);
			
			vm.N = params.term * params.period;
			vm.I = (params.rate / 100) / params.period;
			vm.v = Math.pow((1 + I), N);
			vm.t = (I * v) / (v - 1);
			vm.result = params.balance * t;
			
			return result;
		
		};
		
		return this.each(function() {
			vm.$element = $(this);
			vm.$result = calculate(options.params);
			vm.output = '<h4>' + options.currency + ' ' + $result.toFixed(2) + '</h4>';
			$(output).appendTo($element);
		
		
		});
	
	};


})(jQuery);

$(function() {
	$('#test').on('submit', function(e) {
		e.preventDefault();
		vm.$params = {
			balance: $('#balance').val(),
			rate: $('#rate').val(),
			term: $('#term').val(),
			period: $('option:selected', '#period').val()
		};
		
		$(this).calculateMortgage({
			params: $params
		})
	
	});	


});





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