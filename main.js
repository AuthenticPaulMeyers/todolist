const buttonElement = document.querySelector('.input-button');
	const parentContainer = document.querySelector('.list-items');


	let toDoList = JSON.parse(localStorage.getItem('ToDoList'));

	if(!toDoList){
		toDoList = [];
	}

	addHTML();  // display the to do list first on the page

    const inputElement = document.querySelector('.input-box');
	const dateElement = document.querySelector('.date');
    
	function unshiftTodo(){
		
		const task = inputElement.value;
		const dueDate = dateElement.value;
				
			if(task === '' || dueDate === '' ){
				alert('Please enter a valid task..!');				
			}
			else{
				toDoList.unshift(
					{
						name: task,
						dueDate: dueDate
					});

				inputElement.value = '';
				dateElement.value = '';
			}

				addHTML();
	}

	buttonElement.addEventListener('click', () => {
			unshiftTodo();
		
	});

	inputElement.addEventListener('keydown', (event) => {
		if(event.key === 'Enter'){
			unshiftTodo();
		}
	});


	function addHTML (){
		let appendHTML = '';

			toDoList.forEach((listItems, index) =>{
				const {name, dueDate} = listItems;
				const html = `
					<div class="task-item">
						<div class="item">${name}</div>
					    <div class="due-date">${dueDate}</div>
					</div>
					<button class="remove-btn js-remove-button">Remove
					</button>
					`;
				appendHTML += html;
			});

		parentContainer.innerHTML = appendHTML;

		document.querySelectorAll('.js-remove-button').forEach((removeButton, index) => {
			removeButton.addEventListener('click', () => {
				toDoList.splice(index, 1);
				addHTML();
			});
		});

	localStorage.setItem('ToDoList', JSON.stringify(toDoList));

	}

