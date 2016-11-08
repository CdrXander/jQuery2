$(document).ready(function() {

	$('#newTaskForm').hide();

	var listo = [];
	var Task = function(task) {
		this.task = task;
		this.id = 'new';
	}

	var addTask = function(task) {
		if(task) {
			task = new Task(task);
			listo.push(task);
			$('#newItemInput').val('');
			$('#newList').append(	'<a href="#finish" class="" id="item"><li class="list-group-item">' +
								'<h3>' + task.task + '</h3>' + '<span class="arrow pull-right">' +
								'</span></li></a>');
		
		}
		$('#newTaskForm').slideToggle('fast','linear');
	}

	$('#saveNewItem').click(function(e) {
		e.preventDefault();
		var task = $('#newItemInput').val().trim();
		addTask(task);
	})

	//Opens Form
	$('#add-todo').click(function() {
		$('#newTaskForm').fadeToggle('fast','linear');
	});
	//Closes Form
	$('#cancel').click(function() {
		$('#newTaskForm').fadeToggle('fast','linear');
	});
	


});