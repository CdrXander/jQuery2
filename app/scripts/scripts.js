$(document).ready(function() {

	//var and function declaration
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
	};

	var advanceTask = function(task) {
		var modified = task.innerText.trim();
		for(var i = 0; i < listo.length; i++) {
			if (listo[i].id === "new") {
				listo[i].id = 'inProgress';
			} else if (listo[i].id === "inProgress") {
				listo[i].id = "archived";
			} else {
				listo.splice(i,1);
			}
			break;
		}
		task.remove();
	};

	//Execution
	$('#newTaskForm').hide();



	//Listeners
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
	
	//Move from "New" to "In Progress"
	$(document).on('click', '#item', function(e) {
		e.preventDefault();
		var task = this;
		advanceTask(task);
		this.id = 'inProgress';
		$('#currentList').append(this.outerHTML);
	});

	//Move from "In Progress" to "Complete"
	$(document).on('click', '#inProgress', function(e) {
		e.preventDefault();
		var task = this;
		task.id = "archived";
		var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
		advanceTask(task);
		$('#archivedList').append(changeIcon);
	});

	$(document).on('click', '#archived', function(e) {
		e.preventDefault();
		var task = this;
		advanceTask(this);
	});

});