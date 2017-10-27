angular.module('myApp', [])
	.controller('myCtrl', ['$scope', function($scope) {
	    $scope.name = "Todo List";
	    $scope.total=0;
	    
	    function add() {
	    	if(!$scope.todo){
	    		return;
	    	}
	        var div = $(`<div class="input"></div>`);
	        div.text($scope.todo);
	        var section = $('section');
	        section.append(div);
	        $('input').attr({value: ''});
	        $scope.todo=null;
	        var divs=$('div.input');
	        $scope.total=divs.length;
	        $('.div').css({"display":"flex"});
	        
	        //双击
        	divs.each(function(){
        		this.ondblclick=function(){
        			$(this).addClass("completed");
        			$(this).css({"color": "#ccc","text-decoration":"line-through"});
        		}
        	})
	    };
	    $scope.add = function (){
	    	add();
	    }
	    window.onkeydown=function (event){
	    	if(event.keyCode===13){
	    		add();
	    	}
	    }
	    
	    //All
	    $scope.all=function(){
	    	var divs=$('div.input');
	    	divs.each(function(){
	    		$(this).css({"display":"block"});
	    	})
	    }
	    
	    //Active
	    $scope.active=function(){
	    	var divs=$('div.input');
	    	divs.each(function(){
	    		$(this).css({"display":"none"});
	    		if(!$(this).hasClass('completed')){
	    			$(this).css({"display":"block"});
	    		}
	    	})
	    }
	    
	    //Completed
	    $scope.completed=function(){
	    	var divs=$('div.input');
	    	divs.each(function(){
	    		$(this).css({"display":"none"});
	    		if($(this).hasClass('completed')){
	    			$(this).css({"display":"block"});
	    		}
	    	})
	    }
	    
	    //clear
	    $scope.clear=function(){
	    	var divs=$('div.input');
	    	divs.each(function(){
	    		$(this).css({"display":"none"});
	    		if($(this).hasClass('completed')){
	    			$(this).remove();
	    		}
	    	})
	    	var divs=$('div.input');
	    	$scope.total=divs.length;
	    }
	}]);