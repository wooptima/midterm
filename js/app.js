var app = angular.module('toDoApp', []);
app.controller('TodoCtrl', function TodoCtrl($scope) {



  $scope.saveItems = localStorage.getItem('todos');
  $scope.todos = (localStorage.getItem('todos') !== null) ? JSON.parse($scope.saveItems) : [];
  localStorage.setItem('todos', JSON.stringify($scope.todos));


  $scope.addTodo = function () {
    $scope.todos.push({
      title: $scope.todoTitle,
      text: $scope.todoText,
      date: $scope.todoDate,
      done: false,
      editing: false
    });
    localStorage.setItem('todos', JSON.stringify($scope.todos));
    $('#task').modal('hide');
    $scope.todoTitle = '';
    $scope.todoText = '';
    $scope.todoDate = '';
  };

 
  $scope.close = function () {
    $('#task').modal('hide');
    $scope.todoTitle = '';
    $scope.todoText = '';
    $scope.todoDate = '';
  };

 
  $scope.deleteItem = function (index) {
    $scope.todos.splice(this.index, 1);
    localStorage.setItem('todos', JSON.stringify($scope.todos));
  };


  $scope.updateTodos = function () {
      console.log('setest')
    localStorage.setItem('todos', JSON.stringify($scope.todos));
  }
});


