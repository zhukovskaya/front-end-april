myApp.controller('SimpleController', function($timeout) {
	var sCtrl = this;

	sCntrl.table = [
	{
		id: 1,
		name: 'test 1' ,
		email: 'test 1@gmail',
		description: 'Some description',
		isWorking: false
	}

	{
		id: 2,
		name: 'test 2' ,
		email: 'test 2@gmail',
		description: 'Some description',
		isWorking: false
	}
	
	{
		id: 3,
		name: 'test 3' ,
		email: 'test 3@gmail',
		description: 'Some description',
		isWorking: false
	}
	];

	$timeout(function() {

	})
})