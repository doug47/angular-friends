app.controller ('AppCtrl', function ($scope, $http) {

	$http.get("https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json").then(function (data){
		$scope.list = data.data;
		//var friends = $scope.list
		console.log(data);

});
});





