angular.module('myApp', [])
    .controller('myCtrl', ['$scope', function ($scope) {
        $scope.name = "Todo List";
        $scope.total = 0;

        function add() {
            if (!$scope.todo) {
                return;
            }
            var div = $(`<div class="input"></div>`);
            div.text($scope.todo);
            var section = $('section');
            section.append(div);
            $('input').attr({value: ''});
            $scope.todo = null;
            var divs = $('div.input');
            $scope.total = divs.length;
            $('.div').css({"display": "flex"});

            //双击  标记已完成事件
            divs.each(function () {
                this.ondblclick = function () {
                    $(this).addClass("completed");
                    $(this).css({"color": "#ccc", "text-decoration": "line-through"});
                }
            })
        };

        //失去焦点触发事件
        $scope.add = function () {
            add();
        }

        //回车触发事件
        window.onkeydown = function (event) {
            if (event.keyCode === 13) {
                $('input').blur();
            }
        }

        //点击All事件
        $scope.all = function () {
            var divs = $('div.input');
            divs.each(function () {
                $(this).css({"display": "block"});
            })
        }

        //点击Active事件
        $scope.active = function () {
            var divs = $('div.input');
            divs.each(function () {
                $(this).css({"display": "none"});
                if (!$(this).hasClass('completed')) {
                    $(this).css({"display": "block"});
                }
            })
        }

        //点击Completed事件
        $scope.completed = function () {
            var divs = $('div.input');
            divs.each(function () {
                $(this).css({"display": "none"});
                if ($(this).hasClass('completed')) {
                    $(this).css({"display": "block"});
                }
            })
        }

        //点击clear事件
        $scope.clear = function () {
            var divs = $('div.input');
            divs.each(function () {
                $(this).css({"display": "none"});
                if ($(this).hasClass('completed')) {
                    $(this).remove();
                }
            })
            var divs = $('div.input');
            $scope.total = divs.length;
        }
    }]);