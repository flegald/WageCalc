$(function(){

	var date;
	var startTime;
	var endTime;
	var wageInput;
	var wageInt;
	var wageRate;
	var elapsedTimeSecs;
	var elapsedTimeMins;
	var payTotalInt;
	var payTotalString;

	$('#main').hide()
	$('#results').hide()

	$('#accept').on('click', function(){
		wageInput = $('#hourlyWage').val();
		wageRate = wageInput / 60;
		date = new Date();
		startTime = date.getTime();
		$('#intro').hide()
		$('#main').show()
	})


	$('#end').on('click', function(){
		date = new Date();
		endTime = date.getTime();
		elapsedTimeSecs = (endTime - startTime) / 1000;
		elapsedTimeMins = elapsedTimeSecs / 60;
		payTotalInt = elapsedTimeMins * wageRate;
		payTotalString = payTotalInt.toFixed(2).toString()

		$('#end').hide()
		$('#results').show()
		$('#resultsText').text('$' + payTotalString)
	})

});